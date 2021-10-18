import React, {useState} from 'react';

import './Project.css';
import create8 from './assets/images/project.jpg'
import Loader from './Loader';

function Project() {
  const [loading, setLoading] = useState(true);

  function onLoading(loading) {
    setLoading(loading);
  }

  return <Loader position="absolute" delay={1500} cover={true}
    onLoading={(loading) => onLoading(loading)}
    renderContent={
    <div className={`project ${!loading && 'fade-in'}`}>
      <img className="project-preview" src={create8} alt="Create 8"/>
    </div>
  }></Loader>;
}

export default Project;
