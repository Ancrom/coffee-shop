import { Component } from "react";
import AboutHeader from "../components/aboutHeader/AboutHeader";
import AboutBody from "../components/aboutBody/AboutBody";
import SearchPanel from "../components/searchPanel/SearchPanel";
import CoffeeItemsList from "../components/coffeeItemsList/CoffeeItemsList";

class About extends Component {
  state = {};
  render() {
    const { coffeeList, onFilter, onSearch, getCardId } = this.props;
    return (
      <div data-aos="fade">
        <AboutHeader />
        <AboutBody />
        <SearchPanel onFilter={onFilter} onSearch={onSearch} />
        <CoffeeItemsList coffeeList={coffeeList} getCardId={getCardId} />
      </div>
    );
  }
}

export default About;
