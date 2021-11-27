import React from 'react';

import './Project.css';
import create8 from './assets/images/project.jpg'
import firstPlace from './assets/images/1stplace.png'
import Loader from './Loader';

function Project() {
  return <Loader delay={1500} cover={true}
  renderContent={
    <div className="project">
      <img className="project-preview" src={create8} alt="Create 8"/>
      <img className="project-1stplace" src={firstPlace} alt="1st Place" />
    </div>
  }/>;
}

export default Project;
