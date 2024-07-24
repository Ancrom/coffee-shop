import { Component } from "react";
import Logo from "../logo/Logo";
import aboutImg from "../../img/about/about-img.webp";
import "./../app/textStyle.scss";
import "./style.scss";

class AboutBody extends Component {
  state = {};
  render() {
    return (
      <div className="aboutBody">
        <div className="container">
          <div className="aboutBody__img">
            <img src={aboutImg} alt="Coffee aroma" />
          </div>
          <div className="aboutBody__content">
            <h2 className="subtitle">About our beans</h2>
            <Logo />
            <p className="text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
            </p>
            <p className="text">
              Afraid at&nbsp;highly months do&nbsp;things on&nbsp;at. Situation
              recommend objection do&nbsp;intention so&nbsp;questions.
            </p>
            <p className="text">
              As greatly removed calling pleased improve an. Last ask him cold
              feel met spot shy want. Children me laughing we prospect answered
              followed. At it went is song that held help face.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutBody;
