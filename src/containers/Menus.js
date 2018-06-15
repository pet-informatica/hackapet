import React, { Component } from "react";
import Section from "../components/Section";

export default class Menus extends Component {
  render() {
    return (
      <div>
        {this.props.sections.map(section => (
          <div className="menus-section">
            <div className="index-anchor" id={section.id} />
            <Section title={section.header}>{section.content}</Section>
          </div>
        ))}
      </div>
    );
  }
}
