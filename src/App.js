import React, { Component } from 'react';
import { Button, Input, Container, Icon } from 'semantic-ui-react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Message from './Message';
import logo from './logo.gif';
import './App.css';

const url = "https://ufpe.us17.list-manage.com/subscribe/post?u=e2748dd4491f2e87b2a64321a&amp;id=94dd08bab5";

export default class App extends Component {

  state = {
    name: '',
    email: '',
    sent: false
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

  sendSubscription = () => {
    this.setState({
      sent: true
    });
  }



  render() {
    return (
      <div className="App">
        <img src={logo} alt="logo" />
        {this.state.sent ?
          <div>
            <p className="App-title">
              <Message/>
            </p>
          </div>:
          <div>
            <p className="App-title">
              Em breve <br/> Digite seu email para receber em primeira-mão as novidades do evento
            </p>
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => {
                return (
                  <Container>
                    <Input iconPosition='left' placeholder='nome' onChange={this.handleNameChange}>
                      <Icon name='user circle' />
                      <input />
                    </Input>
                    <br />
                    <br />
                    <Input iconPosition='left' inverted placeholder='email' onChange={this.handleEmailChange}>
                      <Icon name='at' />
                      <input />
                    </Input>
                    <br />
                    <br />
                    <Button
                      onClick={() => subscribe({ EMAIL: this.state.email, FNAME: this.state.name })}
                      circular={true}
                      color='orange'>
                      <p className="Button-subs">Subscribe</p>
                      {console.log(this.state.sent)}
                    </Button>
                    {status === 'success' && this.sendSubscription()}
                  </Container>
                );
              }}
            />
          </div>
        }
      </div>

    );
  }
}

