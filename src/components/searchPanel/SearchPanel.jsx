import { Component } from "react";
import Search from "../search/Search";
import Filter from "../filter/Filter";
import "./style.scss";

class SearchPanel extends Component {
  state = {};
  render() {
		const { onFilter, onSearch } = this.props;
    return (
      <>
        <div className="searchPanel">
          <div className="container">
            <Search onSearch={onSearch} />
						<Filter onFilter={onFilter} />
          </div>
        </div>
      </>
    );
  }
}

export default SearchPanel;
