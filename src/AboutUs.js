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
      <img className="about-us-team" src={team} alt="About Us" />
      <p className="about-us-text _space">
      We are <span>highly motivated enthusiasts</span> at the beginning of our journey.
      The aim is to create a comfortable and healthy space considering the modern eco standards 
      Our goal is to continue to upgrade ourselves and never stop learning new things.
      </p>
      <p className="about-us-text _space">
        Foreign and Greek students, from Russia and Greece, took a chance in the 
        <a className="link" href="https://eipak.org/a%cf%81%cf%87%ce%b9%cf%84%ce%b5%ce%ba%cf%84%ce%bf%ce%bd%ce%b9%ce%ba%cf%8c%cf%82-%ce%b4%ce%b9%ce%b1%ce%b3%cf%89%ce%bd%ce%b9%cf%83%ce%bc%cf%8c%cf%82-%cf%86%ce%bf%ce%b9%cf%84%ce%b7%cf%84%cf%8e%ce%bd-2021" target="_blank" rel="noreferrer">
          <span> Passive House competition </span>
        </a>
        from the Hellenic Passive house institute. We got a lot of new knowledge and information about passive design and learned how to use this in our future projects!
      </p>
      <p className="about-us-text _space _center">
        On this website, we present a small part of our work just to remember a great time doing it.
      </p>
      <p className="about-us-text _space _right _primary">
        "At first we make the buildings and then the buildings make us"
      </p>
      <p className="about-us-text _right _primary">-F. Duffy, (1992).</p>
    </div>
  }></Loader>;
}

export default AboutUs;
