import React, {useState, useEffect} from 'react';
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  withRouter
} from "react-router-dom";

import './App.css';
import logo from './assets/images/create8.png';
import github from './assets/images/github.svg';
import facebook from './assets/images/facebook.svg';
import youtube from './assets/images/youtube.svg';
import menuButton from './assets/images/menu-button.svg';
import passiveHouseInstitute from './assets/images/passivehouseinstitute.png';
import dimosTrikalon from './assets/images/dimosTrikalon.png';
import Presentation from './Presentation';
import Project from './Project';
import Video from './Video';
import AboutUs from './AboutUs';
import Loader from './Loader';

function App() {
  const history = useHistory();
  const [selectedPage, setSelectedPage] = useState('/project');
  const [openMenu, setOpenMenu] = useState(false);

  /* eslint-disable */ 
  useEffect(() => {
    history.listen(() => {
      setSelectedPage(history.location.pathname);
    });
    setSelectedPage(history.location.pathname);
  }, []); 

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
    <span className={`header-menu-link ${selectedPage === '/project' && 'active'}`} 
      onClick={() => onPageActive('/project')}>Project</span>
    <span className={`header-menu-link ${selectedPage === '/presentation' && 'active'}`} 
      onClick={() => onPageActive('/presentation')}>Presentation</span>
    <span className={`header-menu-link ${selectedPage === '/aboutus' && 'active'}`}
      onClick={() => onPageActive('/aboutus')}>About Us</span>
  </>;

  return <Loader position="fixed" delay={3000} cover={true} 
    renderLoading={<img className="application-loading-logo" src={logo} alt="Logo" />}
    renderContent={
      <div className="application">
        <div className="application-header">
          <img className="application-header-menu-icon" src={menuButton} alt="Menu"
            onClick={() => onOpenMenu(!openMenu)} />
          <img className="application-header-logo" src={logo} alt="Logo"
            onClick={() => onPageActive('/project')} />
          <img className="application-header-video" src={youtube} alt="Video"
            onClick={() => onPageActive('/video')} />
          <div className="application-header-menu">
            {renderMenu}
          </div>
          <div className="application-header-space"></div>
          { openMenu &&
            <div className="application-header-drop-menu">
              {renderMenu}
            </div>
          }
          <a href="https://trikalacity.gr/" target="_blank" rel="noreferrer" title="Municipality Of Trikala">
            <img className="application-header-mot" src={dimosTrikalon} alt="Municipality Of Trikala" />
          </a>
          <a href="https://eipak.org/" target="_blank" rel="noreferrer">
            <img className="application-header-phi" src={passiveHouseInstitute} alt="Passive House Institute" />
          </a>
        </div>
        <div className="application-content">
          <Switch>
            <Route path="/project" render={() => <Project /> } />
            <Route path="/presentation" render={() => <Presentation /> } />
            <Route path="/aboutus" render={() => <AboutUs /> } />
            <Route path="/video" render={() => <Video /> } />
            <Route path="/" render={() => <Redirect to="/project" />} />
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

export default withRouter(App);
