import React, {useState} from 'react';
import {
  Switch,
  Route,
  Redirect,
  useHistory 
} from "react-router-dom";

import './App.css';
import logo from './assets/images/create8.png';
import github from './assets/images/github.svg';
import facebook from './assets/images/facebook.svg';
import youtube from './assets/images/youtube.svg';
import menuButton from './assets/images/menu-button.svg';
import passiveHouseInstitute from './assets/images/passivehouseinstitute.png';
import Presentation from './Presentation';
import Project from './Project';
import Video from './Video';
import AboutUs from './AboutUs';
import Loader from './Loader';

function App() {
  const history = useHistory();
  const [selectedPage, setSelectedPage] = useState('cre8/project');
  const [openMenu, setOpenMenu] = useState(false);

  function onOpenMenu(on) {
    setOpenMenu(on);
  }

  function onPageActive(selectedPage) {
    setSelectedPage(selectedPage);
    if (openMenu) {
      setOpenMenu(false);
    }
    history.push(selectedPage);
  }

  const renderMenu = <>
    <span className={`header-menu-link ${selectedPage === '/cre8/project' && 'active'}`} 
      onClick={() => onPageActive('/cre8/project')}>Project</span>
    <span className={`header-menu-link ${selectedPage === '/cre8/presentation' && 'active'}`} 
      onClick={() => onPageActive('/cre8/presentation')}>Presentation</span>
    <span className={`header-menu-link ${selectedPage === '/cre8/aboutus' && 'active'}`}
      onClick={() => onPageActive('/cre8/aboutus')}>About Us</span>
  </>;

  return <Loader position="fixed" delay={3000} cover={true} 
    renderLoading={<img className="application-loading-logo" src={logo} alt="Logo" />}
    renderContent={
      <div className="application">
        <div className="application-header">
          <img className="application-header-menu-icon" src={menuButton} alt="Menu"
            onClick={() => onOpenMenu(!openMenu)} />
          <img className="application-header-logo" src={logo} alt="Logo" />
          <img className="application-header-video" src={youtube} alt="Video"
            onClick={() => onPageActive('/cre8/video')} />
          <div className="application-header-menu">
            {renderMenu}
          </div>
          <div className="application-header-space"></div>
          { openMenu &&
            <div className="application-header-drop-menu">
              {renderMenu}
            </div>
          }
          <a href="https://eipak.org/" target="_blank" rel="noreferrer">
            <img className="application-header-phi" src={passiveHouseInstitute} alt="Passive House Institute" />
          </a>
        </div>
        <div className="application-content">
          <Switch>
            <Route path="/cre8/project" render={() => 
              <div className="application-page">
                <Project></Project>
              </div>
            } />
            <Route path="/cre8/presentation" render={() => 
              <div className="application-page-full">
                <Presentation></Presentation>
              </div>
            } />
            <Route path="/cre8/aboutus" render={() => 
              <div className="application-page">
                <AboutUs></AboutUs>
              </div>
            } />
            <Route path="/cre8/video" render={() => 
              <div className="application-page-full">
                <Video></Video>
              </div>
            } />
            <Route exact path="/cre8" render={() => <Redirect to="/cre8/project" />} />
            <Route render={() => <Redirect to="/cre8" />} />
          </Switch>
        </div>
        <div className="application-footer">
          <div className="application-footer-text">
            <span>CRE8 Copyright&copy; {(new Date(Date.now()).getFullYear())}</span>
          </div>
          <div className="application-footer-social">
            <a href="https://www.facebook.com/CRE8-112410434553808" target="_blank" rel="noreferrer">
              <img className="application-footer-social-icon" src={facebook} alt="Facebook" />
            </a>
            <a href="https://github.com/Devolick/cre8" target="_blank" rel="noreferrer">
              <img className="application-footer-social-icon" src={github} alt="Github" />
            </a>
          </div>
        </div>
      </div>
    }></Loader>;
}

export default App;
