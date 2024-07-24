import { Component } from "react";
import Logo from "../logo/Logo";
import "./../app/textStyle.scss";
import "./style.scss";

class ProductBody extends Component {
  state = {};
  render() {
    const { imgBig, country, price, description } = this.props.productCard;

    console.log(this.props.productCard);

    return (
      <div className="productBody">
        <div className="container">
          <div className="productBody__img">
            <img src={imgBig} alt="coffee" />
          </div>
          <div className="productBody__content">
            <h2 className="subtitle">About it</h2>
            <Logo />
            <div className="productBody__desc">
              <p className="text">
                <span className="bold">Country: </span>
                {country}
              </p>
              <p className="text">
                <span className="bold">Description: </span>
                {description}
              </p>
              <p className="text">
                <span className="bold">Price: </span>
                <span className="productBody__price">{price}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductBody;
