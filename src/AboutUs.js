import React, {useState} from 'react';

import './AboutUs.css';
import about from './assets/images/about.jpg';
import team from './assets/images/team.jpg';
import Loader from './Loader';

function AboutUs() {
  const [loading, setLoading] = useState(true);

  function onLoading(loading) {
    setLoading(loading);
  }

  return <Loader position="absolute" delay={1500} cover={true}
    onLoading={(loading) => onLoading(loading) }
    renderContent={
    <div className={`about-us ${!loading && 'fade-in'}`}>
      <img className="about-us-title" src={about} alt="About Us"/>
      <p className="about-us-text">
      We are <span>highly motivated enthusiasts</span> at the beginning of our journey.
      The aim is to create a comfortable and healthy space considering the modern eco standards 
      Our goal is to continue to upgrade ourselves and never stop learning new things.
      </p>
      <img className="about-us-team" src={team} alt="About Us" />
    </div>
  }></Loader>;
}

export default AboutUs;
