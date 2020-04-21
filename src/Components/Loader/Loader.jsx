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
      data-test="content-loader"
      backgroundColor={themeContext === 'dark' ? '#333' : '#f5f6f7'}
    >
      <rect
        x="0"
        y="0"
        data-test="content-rect"
        width={loaderSpecs.defaultWidth}
        height={loaderSpecs.defaultHeight}
      />
      <rect
        x="0"
        y="35"
        data-test="content-rect"
        width={loaderSpecs.defaultWidth}
        height={loaderSpecs.defaultHeight}
      />
      <rect
        x="0"
        y="70"
        data-test="content-rect"
        width={loaderSpecs.defaultWidth}
        height={loaderSpecs.defaultHeight}
      />
      <rect
        x="0"
        y="105"
        data-test="content-rect"
        width={loaderSpecs.defaultWidth}
        height={loaderSpecs.defaultHeight}
      />
      <rect
        x="0"
        y="140"
        data-test="content-rect"
        width={loaderSpecs.defaultWidth}
        height={loaderSpecs.defaultHeight}
      />
      <rect
        x="0"
        y="175"
        data-test="content-rect"
        width={loaderSpecs.defaultWidth}
        height={loaderSpecs.defaultHeight}
      />
      <rect
        x="0"
        y="210"
        data-test="content-rect"
        width={loaderSpecs.defaultWidth}
        height={loaderSpecs.defaultHeight}
      />
      <rect
        x="0"
        y="245"
        data-test="content-rect"
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
