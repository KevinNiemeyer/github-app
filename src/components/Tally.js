import React from 'react';
import './Tally.css';

const Tally = ({ profile1, profile2 }) => {
  const getProfileScore = (profile) => {
    //function that takes a profile and returns the sum of their scores
    const { following, followers, public_repos } = profile;

    let result = following + followers + public_repos;
    return result;
  };

  const scoreProfile1 = getProfileScore(profile1);
  const scoreProfile2 = getProfileScore(profile2);

  return (
    <div className='tallies-container'>
      <div className='scores'>
        <div className='tally-container'>
          {profile1 && <p>{profile1.login}</p>}
          <p>{scoreProfile1}</p>
        </div>

        <div className='tally-container'>
          {profile2 && <p>{profile2.login}</p>}
          <p>{scoreProfile2}</p>
        </div>
      </div>

      <div className='winner blinking'>
        {scoreProfile1 > scoreProfile2 ? (
          <div>{profile1.login} Wins!</div>
        ) : scoreProfile1 < scoreProfile2 ? (
          <div>{profile2.login} Wins!</div>
        ) : (
          <div>Tie!</div>
        )}
      </div>
    </div>
  );
};

export default Tally;
