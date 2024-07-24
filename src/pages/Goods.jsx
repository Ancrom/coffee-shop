import { Component } from "react";
import GoodsHeader from "../components/goodsHeader/GoodsHeader";
import GoodsBody from "../components/goodsBody/GoodsBody";
import CoffeeItemsList from "../components/coffeeItemsList/CoffeeItemsList";



class Goods extends Component {
  state = {};
  render() {
		const { coffeeList, getCardId } = this.props;
		return (
			<div data-aos="fade">
				<GoodsHeader />
				<GoodsBody />
				<CoffeeItemsList coffeeList={coffeeList} getCardId={getCardId}/>
			</div>
		);
  }
}

export default Goods;
