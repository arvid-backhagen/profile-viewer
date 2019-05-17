import React from "react";

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div className="ProfileCard">
        <img src={this.props.imageSrc} alt="N/A" className="thumbnail" />
      </div>
    );
  }
}

export default ProfileCard;
