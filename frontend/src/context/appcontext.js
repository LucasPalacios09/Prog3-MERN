import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar';
import LogIn from '../components/LogIn/logIn';

export default class Appcontext extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false,
            userName: '',
            showLogInModal: false
        }

        this.logIn = this.logIn.bind(this);
        this.logOut= this.logOut.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    logIn(){this.setState({
        isLoggedIn: true, 
        userName: 'Lucas',
        })};
    
    logOut(){this.setState({isLoggedIn: false})};

    showModal(){this.setState({showLogInModal: true})};


    render() {
        if (this.state.showLogInModal === true) {
            return (
                <div>
                    <LogIn acceptBtn={this.logIn} cancelBtn={this.logOut}></LogIn>
                </div>
            );            
        }
        return (
                <div>
                    {this.props.children}
                </div>
        );
    }
}
