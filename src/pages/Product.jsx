import { Component } from "react";
import AboutHeader from "../components/aboutHeader/AboutHeader";
import ProductBody from "../components/productBody/ProductBody";

class Product extends Component {
  state = {};
  render() {
    const { productCard } = this.props;
    return (
      <div data-aos="fade">
        <AboutHeader />
        <ProductBody productCard={productCard} />
      </div>
    );
  }
}

export default Product;
