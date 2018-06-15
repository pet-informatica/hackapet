import React, { Component } from "react";
import { Container, Header, Icon, Segment } from "semantic-ui-react";
import "../css/section.css";

export default class Section extends Component {
  render() {
    return (
      <Container text className="section-container">
        <Segment>
          <Header as="h3" textAlign="left">
            {this.props.title}
            {this.props.icon != null && (
              <Icon name={this.props.icon} color="grey" />
            )}
          </Header>
          <br />
          {this.props.children}
          <br />
        </Segment>
      </Container>
    );
  }
}
