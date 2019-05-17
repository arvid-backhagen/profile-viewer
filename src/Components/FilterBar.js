import React from "react";

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: []
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div className="FilterBar">
        <input
          type="text"
          onChange={e => this.props.searchChange(e)}
          className="search-bar"
        />
      </div>
    );
  }
}

export default FilterBar;
