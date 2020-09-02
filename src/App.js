import React from 'react';
import axios from 'axios';
import Profile from './components/Profile';
import Tally from './components/Tally';
import './App.css';

class App extends React.Component {
  state = {
    value: '',
    profile1: null,
    profile2: null,
  };

  handleChange = (e) => this.setState({ value: e.target.value });

  handleClick = async (profile) => {
    const url = `https://api.github.com/users/${this.state.value}`;
    const response = await axios(url);
    this.setState({
      [profile]: response.data,
      value: '',
    });
  };

  render() {
    return (
      <div className='app-container'>
        <h1 style={{ margin: '25px 0 50px 0' }}>Github Profile App</h1>
        <div className='profiles-container'>
          <div className='app-profile'>
            <p>Enter First GitHub ID:</p>
            <Profile
              profileKey='profile1'
              profile={this.state.profile1}
              handleClick={this.handleClick}
              handleChange={this.handleChange}
            />
          </div>
          {this.state.profile1 && <div className='vs-div'>VS</div>}
          {this.state.profile1 && (
            <div className='app-profile'>
              <p>Enter Second GitHub ID:</p>
              <Profile
                profileKey='profile2'
                profile={this.state.profile2}
                handleClick={this.handleClick}
                handleChange={this.handleChange}
              />
            </div>
          )}
        </div>

        {this.state.profile1 && this.state.profile2 && (
          <Tally
            profile1={this.state.profile1}
            profile2={this.state.profile2}
          />
        )}
      </div>
    );
  }
}

export default App;

//https://api.github.com/users/
