import React from "react";
import axios from "axios";
import Zoom from "react-reveal/Zoom";
import debounce from "lodash.debounce";

import ProfileCard from "./ProfileCard";
import FilterBar from "./FilterBar";
import Profile from "./Profile";
import OutsideClick from "./OutsideClick";
import "../Styles/ProfileViewer.css";

function isThere(a_string, in_this_object) {
  // https://stackoverflow.com/questions/8517089/js-search-in-object-values
  if (typeof a_string !== "string") {
    return false;
  }
  for (var key in in_this_object) {
    if (typeof in_this_object[key] === "object") {
      if (isThere(a_string, in_this_object[key])) {
        return true;
      }
    } else if (typeof in_this_object[key] === "string") {
      if (in_this_object[key].toUpperCase().includes(a_string.toUpperCase())) {
        return true;
      }
    }
  }
  return false;
}
class ProfileViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: props.profiles || [],
      currentProfile: null,
      currentPage: 1,
      searchValue: "",
      selectedGender: "none",
    };
    this.searchChange = debounce(this.searchChange, 300, { maxWait: 3000 });
  }
  componentDidMount() {
    this.getProfiles();
  }
  searchChange = e => {
    this.setState({ searchValue: e.target.value });
  };
  pageChange = newPage => {
    this.setState({ currentPage: newPage }, () => this.getProfiles());
  };
  getProfiles = () => {
    axios
      .get(
        `https://randomuser.me/api/?results=40&page=${this.state.currentPage}`
      )
      .then(response => {
        this.setState({
          profiles: response.data.results,
        });
      })
      .catch(err => {
        alert(err);
      });
  };
  handleOptionChange = e => {
    this.setState({ selectedGender: e.target.value });
  };
  profileClick = profile => {
    console.log(profile);
    setTimeout(() => {
      this.setState({
        currentProfile: profile,
      });
    }, 100);
  };
  closeProfile = () => {
    this.setState({ currentProfile: null });
  };
  render() {
    return (
      <div className="ProfileViewer">
        {this.state.currentProfile && (
          <Zoom>
            <OutsideClick clickHandler={this.closeProfile}>
              <Profile profile={this.state.currentProfile} />
            </OutsideClick>
          </Zoom>
        )}
        {this.props.showFilters && (
          <FilterBar
            searchChange={this.searchChange}
            handleOptionChange={this.handleOptionChange}
            selectedOption={this.state.selectedGender}
            page={this.state.currentPage}
            pageChange={this.pageChange}
            showFilters={this.props.showFilters}
            searchValue={this.state.searchValue}
            isMobile={this.props.isMobile}
          />
        )}

        <div className="profile-container">
          {this.state.profiles
            .filter((profile, index) => {
              if (
                this.state.selectedGender === "none" ||
                this.state.selectedGender === profile.gender
              ) {
                if (!this.state.searchValue) return true;
                if (isThere(this.state.searchValue, profile)) {
                  return true;
                }
              }
              return false;
            })
            .map((profile, index) => {
              return (
                <ProfileCard
                  key={index}
                  imageSrc={profile.picture.large}
                  profile={profile}
                  profileClick={this.profileClick}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default ProfileViewer;
