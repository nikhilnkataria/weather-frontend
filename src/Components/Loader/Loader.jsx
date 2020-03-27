import React, { useContext } from 'react';
import ContentLoader from 'react-content-loader';

import ThemeContext from '../../Context/ThemeContext';

const loaderSpecs = {
  primaryColor: '#f3f3f3',
  secondaryColor: '#ecebeb',
  speed: 0.8,
  defaultWidth: '100%',
  defaultHeight: '20'
};

export const UserLoader = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <ContentLoader
      height={285}
      width="100%"
      speed={loaderSpecs.speed}
      backgroundColor={themeContext === 'dark' ? '#333' : '#f5f6f7'}
    >
      <rect
        x="0"
        y="0"
        width={loaderSpecs.defaultWidth}
        height={loaderSpecs.defaultHeight}
      />
      <rect
        x="0"
        y="35"
        width={loaderSpecs.defaultWidth}
        height={loaderSpecs.defaultHeight}
      />
      <rect
        x="0"
        y="70"
        width={loaderSpecs.defaultWidth}
        height={loaderSpecs.defaultHeight}
      />
      <rect
        x="0"
        y="105"
        width={loaderSpecs.defaultWidth}
        height={loaderSpecs.defaultHeight}
      />
      <rect
        x="0"
        y="140"
        width={loaderSpecs.defaultWidth}
        height={loaderSpecs.defaultHeight}
      />
      <rect
        x="0"
        y="175"
        width={loaderSpecs.defaultWidth}
        height={loaderSpecs.defaultHeight}
      />
      <rect
        x="0"
        y="210"
        width={loaderSpecs.defaultWidth}
        height={loaderSpecs.defaultHeight}
      />
      <rect
        x="0"
        y="245"
        width={loaderSpecs.defaultWidth}
        height={loaderSpecs.defaultHeight}
      />
    </ContentLoader>
  );
};

export const PageLoader = () => (
  <div style={{ marginLeft: '50%', marginTop: '100px' }}>
    <div className="sk-chase">
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
    </div>
  </div>
);
