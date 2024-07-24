import { Component } from "react";
import Hero from "../components/hero/Hero";
import HomeContent from "../components/homeContent/HomeContent";
import Top from "../components/top/Top";

class Home extends Component {
  render() {
    const { coffeeList, getCardId } = this.props;
    return (
      <div data-aos="fade">
        <Hero />
        <HomeContent />
        <Top coffeeList={coffeeList} getCardId={getCardId} />
      </div>
    );
  }
}

export default Home;
