import React from "react";
import Pagination from "rc-pagination";

import "rc-pagination/assets/index.css";
import "../Styles/FilterBar.css";
class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [1, 2, 3, 4, 5],
    };
  }

  componentDidMount() {
    this.searchInput.focus();
    if (this.props.searchValue) {
      this.searchInput.value = this.props.searchValue;
      this.searchInput.style.backgroundColor = "white";
    }
  }

  render() {
    return (
      <div className={"FilterBar" + (this.props.isMobile ? " mobile" : "")}>
        <input
          type="search"
          onChange={e => this.props.searchChange(this.searchInput, e)}
          className="search-bar"
          placeholder="Search..."
          ref={input => {
            this.searchInput = input;
          }}
        />

        <form action="" className="gender-picker">
          <label>
            <input
              className="gender-radio"
              type="radio"
              name="gender"
              value="none"
              checked={this.props.selectedOption === "none"}
              onChange={this.props.handleOptionChange}
            />
            All
          </label>
          <label>
            <input
              className="gender-radio"
              type="radio"
              name="gender"
              value="male"
              checked={this.props.selectedOption === "male"}
              onChange={this.props.handleOptionChange}
            />
            Male
          </label>
          <label>
            <input
              className="gender-radio"
              type="radio"
              name="gender"
              value="female"
              checked={this.props.selectedOption === "female"}
              onChange={this.props.handleOptionChange}
            />
            Female
          </label>
        </form>

        <Pagination
          current={this.props.page}
          onChange={this.props.pageChange}
          total={200}
          pageSize={40}
        />
      </div>
    );
  }
}

export default FilterBar;
