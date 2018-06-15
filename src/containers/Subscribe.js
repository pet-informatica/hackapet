import React, { Component } from "react";
import {
  Button,
  Grid,
  Image,
  Input,
  Modal,
  Container,
  Icon
} from "semantic-ui-react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "../css/subscribe.css";

const url =
  "https://ufpe.us17.list-manage.com/subscribe/post?u=e2748dd4491f2e87b2a64321a&amp;id=94dd08bab5";

export default class Subscribe extends Component {
  state = {
    name: "",
    email: "",
    sent: false
  };

  handleNameChange = ev => {
    this.setState({
      name: ev.target.value
    });
  };

  handleEmailChange = ev => {
    this.setState({
      email: ev.target.value
    });
  };

  sendSubscription = () => {
    this.setState({
      sent: true
    });
  };

  render() {
    return (
      <div className="subscribe">
        <Grid columns="2" verticalAlign="middle" centered>
          <Grid.Row>
            <Grid.Column>
              <div className="subscribe">
                <p className="subscribe-title">Realização</p>
                <Image
                  href="https://pet-informatica.github.io"
                  as="span"
                  size="small"
                  src="http://res.cloudinary.com/dkbuneg9h/image/upload/v1521674491/Logo-PET-Simbolo_qagowa.png"
                />
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="subscribe">
                <p className="subscribe-title">
                  Digite seu email para receber em primeira-mão novidades do
                  evento!
                </p>
                <br />
                <MailchimpSubscribe
                  url={url}
                  render={({ subscribe, status, message }) => {
                    return (
                      <Container>
                        <Input
                          iconPosition="left"
                          placeholder="nome"
                          onChange={this.handleNameChange}
                        >
                          <Icon name="user circle" />
                          <input />
                        </Input>
                        <br />
                        <br />
                        <Input
                          iconPosition="left"
                          inverted
                          placeholder="email"
                          onChange={this.handleEmailChange}
                        >
                          <Icon name="at" />
                          <input />
                        </Input>
                        <br />
                        <br />
                        <Modal
                          open={status === "success"}
                          header="Reminder!"
                          content="Call Benjamin regarding the reports."
                          actions={[
                            "Snooze",
                            { key: "done", content: "Done", positive: true }
                          ]}
                        />
                        <Button
                          onClick={() =>
                            subscribe({
                              EMAIL: this.state.email,
                              FNAME: this.state.name
                            })
                          }
                          circular={true}
                          color="orange"
                        >
                          <p className="Button-subs">Subscribe</p>
                          {console.log(this.state.sent)}
                        </Button>
                        {status === "success" && this.sendSubscription()}
                      </Container>
                    );
                  }}
                />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
