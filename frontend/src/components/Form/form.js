import React, { Component } from 'react'
// import axios from 'axios'
import './form.scss'

export default class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            avatar: '',
            score: ''
        }

        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }



    submit(e) {

        // const users = async ()=>{
        //     const res = await axios.get('http://localhost:4000/user')
        //     res.map(
        //         this.setState({
        //             username: '',
        //             password: '',
        //             avatar: '',
        //             score: ''
        //         })
        //     )


        // }   



        // return(
        //     <div>{this.state.username}</div>
        // );

        fetch('http://localhost:4000/user', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(users => users.map((user) => {

                // document.write(`${user.username} `)
                // return console.log(user.score)
                const usernames = []
                usernames.push(user.username)
                return usernames
            }))
            .then(data => console.log(data))
            .catch(err => console.error(err))

        // fetch('http://localhost:4000/user', {
        //     method: 'POST',
        //     body: JSON.stringify(this.state),
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(res => res.json())
        // .then(data=> console.log(data))
        // .catch(err=>console.error(err))

        e.preventDefault();
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })

    }

    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <fieldset disabled>
                        <label className="form-label" htmlFor="disabledInput">Disabled input</label>
                        <input className="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled />
                    </fieldset>
                </div>
                <div className="form-group">
                    <fieldset>
                        <label className="form-label mt-4" htmlFor="readOnlyInput">Readonly input</label>
                        <input className="form-control" id="readOnlyInput" type="text" placeholder="Readonly input here..." readOnly />
                    </fieldset>
                </div>
                <div className="form-group has-success">
                    <label className="form-label mt-4" htmlFor="inputValid">Valid input</label>
                    <input type="text" defaultValue="correct value" className="form-control is-valid" id="inputValid" />
                    <div className="valid-feedback">Success! You've done it.</div>
                </div>
                <div className="form-group has-danger">
                    <label className="form-label mt-4" htmlFor="inputInvalid">Invalid input</label>
                    <input type="text" defaultValue="wrong value" className="form-control is-invalid" id="inputInvalid" />
                    <div className="invalid-feedback">Sorry, that username's taken. Try another?</div>
                </div>
                <div className="form-group">
                    <label className="col-form-label col-form-label-lg mt-4" htmlFor="inputLarge">Large input</label>
                    <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" id="inputLarge" />
                </div>
                <div className="form-group">
                    <label className="col-form-label mt-4" htmlFor="inputDefault">Default input</label>
                    <input type="text" className="form-control" placeholder="Default input" id="inputDefault" />
                </div>
                <div className="form-group">
                    <label className="col-form-label col-form-label-sm mt-4" htmlFor="inputSmall">Small input</label>
                    <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" id="inputSmall" />
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Input addons</label>
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <span className="input-group-text">$</span>
                            <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                            <span className="input-group-text">.00</span>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-primary" type="button" id="button-addon2">Button</button>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Floating labels</label>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                </div>
            </div>
            // <div className="form-container">
            //     <form onSubmit={this.submit}>
            //     <input type="text" name="username"  value={this.state.username} onChange={this.handleChange}></input>
            //     <input type="password" name="password"  value={this.state.password} onChange={this.handleChange}></input>
            //     <input type="url" name="avatar"   value={this.state.avatar} onChange={this.handleChange}></input>
            //     <input type="number" name="score"  value={this.state.score} onChange={this.handleChange}></input>
            //     <input type="submit" value="Enviar"></input>
            // </form>
            // </div>
        )
    }
}


