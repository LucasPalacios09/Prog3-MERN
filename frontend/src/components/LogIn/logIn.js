import React, { Component } from 'react'
import Form from './formLogIn';
import './login.scss'

export default class LogIn extends Component {

    constructor(props) {
        super(props)
    
        this.AcceptBtn = this.AcceptBtn.bind(this);
        this.CancelBtn = this.CancelBtn.bind(this);
    }
    
    AcceptBtn(){this.props.acceptBtn()}
    CancelBtn(){this.props.cancelBtn()}

    render() {
        return (
            <Form></Form>
        )
    }
}
