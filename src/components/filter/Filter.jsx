import { Component } from "react";
import "./../app/textStyle.scss";
import "./style.scss";

const filterButtons = [
  { name: "Brazil", isActive: false },
  { name: "Kenya", isActive: false },
  { name: "Columbia", isActive: false },
];

class Filter extends Component {
  state = {
    buttons: filterButtons,
  };

  toggleFilter = (name) => {
    this.setState(
      (prevState) => ({
        buttons: prevState.buttons.map((button) => {
          return button.name === name
            ? { ...button, isActive: !button.isActive }
            : { ...button, isActive: false };
        }),
      }),
      () => {
        name = this.state.buttons.every((button) => !button.isActive)
          ? "All"
          : name;
        this.props.onFilter(name);
      }
    );
  };

  componentDidMount() {
    this.toggleFilter("All");
  }

  render() {
    const buttons = this.state.buttons.map(({ name, isActive }) => {
      const clazz = isActive ? "filter__btn active" : "filter__btn";
      return (
        <button
          key={name}
          className={clazz}
          onClick={() => this.toggleFilter(name)}
        >
          {name}
        </button>
      );
    });
    return (
      <>
        <div className="filter">
          <p className="text">Or&nbsp;filter</p>
          <div className="filter__buttons">{buttons}</div>
        </div>
      </>
    );
  }
}

export default Filter;
