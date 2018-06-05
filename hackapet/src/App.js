import React, { Component } from 'react';
import logo from './MOSHED-2018-2-18-11-27-45.gif';
import './App.css';
import { Button, Input,  Container } from 'semantic-ui-react'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://ufpe.us17.list-manage.com/subscribe/post?u=e2748dd4491f2e87b2a64321a&amp;id=94dd08bab5";

export default class App extends Component {

  state = {
    name: '',
    email: ''
  }

  handleNameChange = (ev) => {
    this.setState({
      name: ev.target.value
    });
  }

  handleEmailChange = (ev) => {
    this.setState({
      email: ev.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <img src={logo} alt="logo"/>
        <p className="App-title">
          Em breve. Digite seu email para receber em primeira-mão as novidades do evento.
        </p>
        <MailchimpSubscribe 
          url={url}
          render={({ subscribe, status, message }) => {
            return (
              <div>
                <p><Input placeholder='Nome' onChange={this.handleNameChange}/></p>
                <p><Input placeholder='Email' onChange={this.handleEmailChange}/></p>
                <Button onClick={() => subscribe({EMAIL: this.state.email, NAME: this.state.name})}>
                  Subscribe
                </Button>
              </div>
            );
          }}
        />
        </div>
        
    );
  }
}

