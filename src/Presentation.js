import React, {useState} from 'react';

import './Presentation.css';
import Loader from './Loader';
import arrowLeft from './assets/images/arrow-left.svg';

const requireContext = require.context('./assets/images/presentation', false, /\.jpg$/i);
const presentation = requireContext.keys()
  .reduce((images, item, index) => ({...images, [(item.replace('./',''))]:requireContext(item)}),{})

function Presentation() {
  const [loading, setLoading] = useState(false);
  const [showList, setShowList] = useState(false);

  function onLoading() {
    setLoading(true);
  }

  function onLoaded() {
    setLoading(false);
  }

  function onOpenList() {
    setShowList(!showList);
  }

  function getPresentation() {
    return Object.keys(presentation)
      .sort((a, b) => Number.parseInt(
        a.match(/^[0-9]+/)[0]) - Number.parseInt(b.match(/^[0-9]+/)[0]))
      .map(key => presentation[key].default);
  }

  function getPresentationName(value) {
    value = (String(value).match(/[/]+([^/.]+[.]){1}/i)[0]).slice(1, -1);
    value = value.replace('_', '. ');

    return value;
  }

  function isPresentationPart(name) {
    const isPart = /^[0-9]+\.[ ]*part/i.test(name);

    return isPart;
  }

  function isSelectedAnchor(anchorName) {
    return document.URL.split('#')[1] === anchorName.slice(1)
  }
  
  return <Loader delay={1500} cover={true} renderContent={
    <div className={`presentation ${!loading && 'fade-in'}`}
      onClick={() => onOpenList()}>
      <div className="presentation-list">
        {getPresentation().map((value, index) => 
          <img loading="lazy" className={`presentation-preview`}
            id={`presentation-${index}`}
            src={value} alt={`Presentation ${index}`} 
            onLoadStart={() => onLoading()} onLoaded={() => onLoaded()}/>)
        }
        <Loader position="relative" loading={loading} asItem={true}></Loader>
      </div>
      {showList &&
        <div className="presentation-contents">
          <div className="presentation-contents-list">
            {getPresentation()
            .map(value => getPresentationName(value))
            .map((name, index) => 
            <a className={`presentation-contents-link 
              ${isPresentationPart(name) && '_bold'} 
              ${isSelectedAnchor(`#presentation-${index}`) && '_selected'}`}
              href={`#presentation-${index}`}>
              <span>{name}</span>
            </a>)}
          </div>
          <div className="presentation-contents-close">
            <img className="presentation-contents-close-arrow" src={arrowLeft} alt="Arrow Left" />
          </div>
        </div>
      }
      <div className="presentation-contents-picker"></div>
    </div>
  }></Loader>;
}

export default Presentation;
