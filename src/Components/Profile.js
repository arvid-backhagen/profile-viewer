import React from "react";

import "../Styles/Profile.css";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class Profile extends React.Component {
  state = {
    profileId: null,
  };
  componentDidMount() {}
  render() {
    const { profile } = this.props;

    let fullName = "N/A";
    if (profile.name.first && profile.name.last) {
      fullName =
        capitalizeFirstLetter(profile.name.first) +
        " " +
        capitalizeFirstLetter(profile.name.last);
    }
    return (
      <div className="Profile">
        <div
          className="blurry-bg"
          style={{
            backgroundImage: `url(${profile.picture.large})`,
            backgroundSize: "Cover",
          }}
        />
        <div className="blurry-container">
          <div className="image-container">
            <img
              className="image"
              src={profile.picture.large}
              alt="Profile Pic"
            />
          </div>
          <div className="name-container">
            <div>
              <strong>Name</strong>
              <br /> {fullName}
            </div>
            <div>
              <strong>Age:</strong> {profile.dob.age}
            </div>
            <div>{"Member for " + profile.registered.age + " years"}</div>
          </div>
        </div>
        <div className="clear-container">
          <div className="description">
            <div>
              <strong>E-mail</strong> <br />
              <a href={"mailto:" + profile.email}>{profile.email}</a>
            </div>
            <div>
              <strong>Phone</strong> <br />
              {profile.cell}
            </div>
            <div>
              <strong>Born</strong> <br />
              {profile.dob.date.toString().slice(0, 10)}
            </div>
            <div>
              <strong>State</strong> <br />
              {capitalizeFirstLetter(profile.location.state)}
            </div>
            <div>
              <strong>City</strong> <br />
              {capitalizeFirstLetter(profile.location.city)}
            </div>
            <div>
              <strong>Street</strong> <br />
              {profile.location.street}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
