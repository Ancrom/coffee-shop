import { Component } from "react";
import "./../app/textStyle.scss";
import "./style.scss";

class Search extends Component {
  state = {};
	componentDidMount() {
		const { onSearch } = this.props;
		onSearch("");
	}
  render() {
    const { onSearch } = this.props;
    return (
      <>
        <div className="search">
					<p className="text">Looking for</p>
          <input
            type="text"
            className="search__input"
            placeholder="start typing here..."
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </>
    );
  }
}

export default Search;
