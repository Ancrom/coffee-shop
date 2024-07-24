import { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import "./../app/textStyle.scss";
import "./style.scss";

class Hero extends Component {
  state = {};
  render() {
    return (
      <div className="hero">
        <div className="container">
          <h1 className="title">Everything You Love About Coffee</h1>
          <Logo white />
          <div className="hero__desc">
            <h2 className="subtitle">We makes every cup of coffee possible</h2>
            <h2 className="subtitle">Want to try our beans?</h2>
          </div>
          <Link to="/goods" className="hero__btn">
            More
          </Link>
        </div>
      </div>
    );
  }
}

export default Hero;
