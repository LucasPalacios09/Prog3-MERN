import React from 'react'
// import App from '../../App';
import * as userService from '../Users/userService'
class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '', avatar: '', isLogged: false };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkUserLogin = this.checkUserLogin.bind(this);
  }

  handleNameChange(event) {
    this.setState({ user: event.target.value });
  }

  handlePassChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.user);
    this.checkUserLogin(this.state)
    event.preventDefault();
  }

  async checkUserLogin({ user, password }) {
    const userlogin = await userService.getUserByName(user);
    if (user === userlogin.data.username && password === userlogin.data.password) {
      this.setState({ user: userlogin.data.username, password: '', avatar: userlogin.data.avatar, isLogged: true })
    } else {
      this.setState({ user: '', password: '', avatar: '', isLogged: false })
    }
  }



  render() {
    if (this.state.isLogged) {
      const { user, avatar } = this.state

      return (
        <div>
          <h1>Bienevenido {user}</h1>
          <img src={avatar} alt='avatar'></img>
        </div>
      );
    } else {
      // this.setState({ user: '', password: '', avatar: '', isLogged: false })
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.user} onChange={this.handleNameChange} />
          </label>
          <label>
            Password:
            <input type="password" value={this.state.password} onChange={this.handlePassChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }

  }
}

export default FormLogin