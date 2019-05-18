import React from "react";

class Profile extends React.Component {
  state = {
    user: null,
  };
  componentDidMount() {
    const { handle } = this.props.match.params;

    fetch(`https://api.twitter.com/user/${handle}`).then(user => {
      this.setState(() => ({ user }));
    });
  }
  render() {
    <div className="Profile">
      <div className="image-container">
        <img className="image" />
      </div>
      <div className="name-container">
        <div>Name</div>
        <div>Age</div>
        <div>extra stuff</div>
      </div>
      <div className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam
        dignissimos tempore. Odio tenetur itaque, culpa obcaecati corporis
        temporibus suscipit quaerat earum impedit laboriosam necessitatibus
        sint! Perspiciatis laudantium dolores id!
      </div>
    </div>;
  }
}
