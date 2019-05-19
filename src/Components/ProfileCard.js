import React from "react";

import "../Styles/ProfileCard.css";

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    const { name } = this.props.profile;
    let fullName = "N/A";
    if (name.first && name.last) {
      fullName = name.first.toUpperCase() + " " + name.last.toUpperCase();
    }
    return (
      <div
        className="ProfileCard"
        onClick={e => this.props.profileClick(this.props.profile)}
      >
        <img src={this.props.imageSrc} alt="N/A" className="thumbnail" />
        <div className="name-container">{fullName}</div>
      </div>
    );
  }
}

export default ProfileCard;
