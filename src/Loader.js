import React, {useState, useEffect} from 'react';

import './Loader.css';
import circleLoading from './assets/images/circle-loading.svg'

function Loader(props) {
  const {position, delay, onLoading, asItem, renderContent, renderLoading} = props;
  const [loading, setLoading] = useState(!!props.loading || !!delay);
  const [cover, setCover] = useState(props.cover);

  /* eslint-disable */ 
  useEffect(() => {
    let timer;
    if (delay) {
      if (onLoading) {
        onLoading(true);
      }
      timer = setTimeout(() => {
        setLoading(false);
        setCover(false);
        if (onLoading) {
          onLoading(false);
        }
      }, delay);
    }

    return () => clearTimeout(timer);
  }, []); 

  return <>
    {loading && !asItem &&
      <div className={`loader-${position || 'fixed'} ${cover && 'loader-cover'}`}>
        {renderLoading}
        <img className="loader-icon" src={circleLoading} alt="Loader" />
      </div>
    }
    {loading && asItem &&
      <div className={`loader-${position || 'fixed'}`}>
        {renderLoading}
        <img className="loader-icon" src={circleLoading} alt="Loader" />
      </div>
    }
    {renderContent}
  </>;
}

export default Loader;
