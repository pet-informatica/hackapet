import React, { Component } from 'react';
import logo from './MOSHED-2018-2-18-11-27-45.gif';
import './App.css';
import MailchimpSubscribe from "react-mailchimp-subscribe"


export default class App extends Component {
  render() {
  	const url = "https://ufpe.us17.list-manage.com/subscribe/post?u=e2748dd4491f2e87b2a64321a&amp;id=94dd08bab5";
    return (
      <div className="App">
        <img src={logo} alt="logo"/>
        <p className="App-title">
          Em breve. Digite seu email para receber em primeira-mão as novidades do evento.
        </p>
        <MailchimpSubscribe url={url} />
        </div>
        
    );
  }
}

