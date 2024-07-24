import { Component } from "react";
import "./../app/textStyle.scss";
import "./style.scss";

class AboutHeader extends Component {
  state = {};
  render() {
    return (
      <div className="aboutHero">
        <div className="container">
          <h1 className="title">Our Coffee</h1>
        </div>
      </div>
    );
  }
}

export default AboutHeader;
