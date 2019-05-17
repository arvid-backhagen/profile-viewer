import React from "react";
import axios from "axios";
import Header from "./Components/Header";
import FilterBar from "./Components/FilterBar";
import ProfileCard from "./Components/ProfileCard";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      searchValue: ""
    };
  }
  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then(response => {
        console.log(response);
        let newProfiles = [...this.state.profiles];
        newProfiles.push(response.data.results[0]);
        this.setState({
          profiles: newProfiles
        });
      })
      .catch(err => {
        alert(err);
      });
  }
  searchChange = e => {
    this.setState({ searchValue: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content-container">
          <FilterBar searchChange={this.searchChange} />
          {this.state.profiles.map((profile, index) => {
            return (
              <ProfileCard key={index} imageSrc={profile.picture.medium} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
