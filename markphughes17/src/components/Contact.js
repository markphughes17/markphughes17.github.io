import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h1>I can be reached in the following ways</h1>
        <a href="https://twitter.com/markphughes17"><img class="social-img" alt="Twitter Logo" src={require('../res/Twitter_logo_round.png').default}/></a> <br/><br/>
        <a href="https://github.com/markphughes17"><img class="social-img"alt="Github logo" src={require("../res/GitHub-Mark-32px.png").default}></img></a> <br/><br/>
        <a href="https://www.linkedin.com/in/mark-hughes-429072ba/"><img class="social-img" alt="Linkedin Logo" src={require("../res/in-logo.png").default}></img></a><br/><br/>
        <a href="mailto:markphughes17@hotmail.co.uk"><img class="social-img" alt="Email" src={require("../res/email.png").default}></img></a>
      </div>
    );
  }
}
 
export default Contact;