import React from 'react';

import './Project.css';
import create8 from './assets/images/project.jpg'
import Loader from './Loader';

function Project() {
  return <Loader delay={1500} cover={true}
  renderContent={
    <div className="project">
      <img className="project-preview" src={create8} alt="Create 8"/>
    </div>
  }/>;
}

export default Project;
