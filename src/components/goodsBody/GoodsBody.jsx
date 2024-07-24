import { Component } from "react";
import Logo from "../logo/Logo";
import goodsImg from "../../img/goods/goods-img.webp";
import "./../app/textStyle.scss";
import "./style.scss";

class GoodsBody extends Component {
  state = {};
  render() {
    return (
      <div className="goodsContent">
        <div className="container">
          <div className="goodsContent__img">
            <img src={goodsImg} alt="Coffee aroma" />
          </div>
          <div className="goodsContent__content">
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

export default GoodsBody;
