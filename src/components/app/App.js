import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from "react";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Goods from "../../pages/Goods";
import Product from "../../pages/Product";
import Nav from "../nav/Nav";
import Logo from "../logo/Logo";
import coffeeList from "../../helpers/coffeeList";
import "./style.scss";
import AOS from "aos";
import "aos/dist/aos.css";

class App extends Component {
  state = {
    coffeeList: coffeeList,
    filter: "All",
    term: "",
    cardId: 1,
  };

  componentDidMount() {
    AOS.init();
  }

  filterFavorites = () => {
    const { coffeeList } = this.state;
    return coffeeList.filter((coffee) => coffee.favorite);
  };

  onFilter = (filter) => {
    this.setState({ filter });
  };

  getListOnFilter = (list) => {
    const { filter } = this.state;
    if (filter === "All") return list;
    return list.filter((coffee) => {
      return coffee.country.toLowerCase().indexOf(filter.toLowerCase()) > -1;
    });
  };

  onSearch = (term) => {
    this.setState({ term });
  };

  getListOnSearch = (list) => {
    const { term } = this.state;
    if (term.length === 0) return list;
    return list.filter((coffee) => {
      return coffee.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  getCardId = (cardId) => {
    this.setState({ cardId });
  };

  render() {
    const { coffeeList, cardId } = this.state;
    const {
      filterFavorites,
      onFilter,
      getListOnFilter,
      onSearch,
      getListOnSearch,
      getCardId,
    } = this;
    const filteredList = getListOnSearch(getListOnFilter(coffeeList));
    const productCard = coffeeList.find((product) => product.id === cardId);

    return (
      <div className="App">
        <Router basename="/coffee-shop">
          <div className="container">
            <Nav white posLeft pSmall />
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <Home coffeeList={filterFavorites()} getCardId={getCardId} />
              }
            />
            <Route
              path="/about"
              element={
                <About
                  coffeeList={filteredList}
                  onFilter={onFilter}
                  onSearch={onSearch}
                  getCardId={getCardId}
                />
              }
            />
            <Route
              path="/goods"
              element={<Goods coffeeList={coffeeList} getCardId={getCardId} />}
            />
            <Route
              path="/product/:cardId"
              element={<Product productCard={productCard} />}
            />
          </Routes>
          <div className="container">
            <Nav />
            <Logo />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
