import React from 'react';
import './Team.css';
import Hover2 from './Hover/Hover2';

import Navbar from '../Navbar/Navbar';
import Footer2 from '../Footer/Footer2';

import teamMembers from './Assets/all_product';

const Team = () => {
  const renderTeamSection = (teamName, teamMembers) => (
    <section key={teamName} className="team-section">
      <h2>{teamName}</h2>
      <div className="card-container">
        {teamMembers.map((item) => (
          <div key={item.id} className="card-wrapper">
            <Hover2 id={item.id} name={item.name} role={item.roll} />
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <>
      <div className='team-container'>
        <h1>Meet Our Teams</h1>
        {Object.entries(teamMembers).map(([teamName, members]) => 
          renderTeamSection(teamName, members)
        )}
      </div>
    </>
  );
};

export default Team;
