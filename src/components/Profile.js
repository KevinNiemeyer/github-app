import React, { Component } from 'react';

import './Profile.css';

export class Profile extends Component {
  render() {
    return (
      <div className='profile-container'>
        <div className='name-input'>
          <input onChange={this.props.handleChange} required />
          <button onClick={() => this.props.handleClick(this.props.profileKey)}>
            Get Profile
          </button>
        </div>
        <div className='image-div'>
          {(this.props.profile && (
            <img src={this.props.profile.avatar_url} alt='nothing available' />
          )) || <h4>No Profile Selected</h4>}
        </div>
        {this.props.profile && <h2>{this.props.profile.name}</h2>}
        {this.props.profile && <h3>{this.props.profile.location}</h3>}
        <div className='stats'>
          <div>
            {this.props.profile && (
              <div className='stat'>
                <p>Followers:</p>
                <p>{this.props.profile.followers}</p>
              </div>
            )}
          </div>
          <div>
            {this.props.profile && (
              <div className='stat'>
                <p>Following:</p>
                <p>{this.props.profile.following}</p>
              </div>
            )}
          </div>{' '}
          <div>
            {this.props.profile && (
              <div className='stat'>
                <p>Repos:</p>
                <p>{this.props.profile.public_repos}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
