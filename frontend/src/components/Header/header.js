import './header.scss'

import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props);
        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
    
        this.state = {
            isLoggedIn: false
        }
    }

    logIn(){
        this.setState({isLoggedIn : true})
    }

    logOut(){
        this.setState({isLoggedIn : false})
    }

    
    render() {
        
        return (
            <Navbar>
                {this.state.isLoggedIn 
                    ? <><NavItem className="navitem" link="/" title="HOME"></NavItem>
                        <NavButton title="LOG OUT" className="navbutton" onClick={this.logOut}/>
                        <NavItem className="navitem_right" link="https://www.netflix.com/browse" title="Netflix"></NavItem>
                        <NavItem className="navitem_right" link="https://www.w3schools.com/cssref/css3_pr_hyphens.asp" title="About"></NavItem></>
                        
                    : <><NavItem className="navitem" link="/" title="HOME"></NavItem>
                        <NavButton className="navbutton" onClick={this.logIn} title="LOG IN"/>
                        <NavItem className="navitem_right" link="https://www.w3schools.com/cssref/css3_pr_hyphens.asp" title="About"></NavItem>
                        </>
                }
            </Navbar>
        )
    }
}

function NavButton(props) {
    
    return <button className={props.className} onClick={props.onClick}>{props.title}</button>
    
}

function Navbar(props) {
    
    return(
        <div>
            <nav className="navbar_container">
                {props.children}
            </nav>
        </div>
    );
}

function NavItem(params) {

    return(
        <div>
            <li className={params.className}>
                <a href={params.link}>{params.title} </a>
            </li>
        </div>
    );
}

function Dropdown(props) {
    return(
        <div className="dropdown">
            {props.children}
        </div>
    );
}

export default Header