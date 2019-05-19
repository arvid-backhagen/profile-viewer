import React, { Component } from "react";
import PropTypes from "prop-types";

export default class OutsideClick extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick);
  }
  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  handleClick(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.clickHandler();
    }
  }
  render() {
    return <div ref={this.setWrapperRef}>{this.props.children}</div>;
  }
}

OutsideClick.propTypes = {
  children: PropTypes.element.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
