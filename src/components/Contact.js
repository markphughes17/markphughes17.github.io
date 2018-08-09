import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h1>I can be found at the following places</h1>
        <a href="https://twitter.com/markphughes17"><img src={require("../res/Twitter_logo_round.png")}></img></a><br/><br/>
        <a href="https://github.com/markphughes17"><img src={require("../res/GitHub-Mark-32px.png")}></img></a><br/><br/>
        <a href="https://www.linkedin.com/in/mark-hughes-429072ba/"><img src={require("../res/linkedin-logo.png")}></img></a><br/><br/>
        <h2>email: markphughes17@hotmail.co.uk</h2>
      </div>
    );
  }
}
 
export default Contact;