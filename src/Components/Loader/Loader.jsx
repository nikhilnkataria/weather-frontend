import React from 'react';
import ContentLoader from 'react-content-loader';

const loaderSpecs = {
  primaryColor: '#f3f3f3',
  secondaryColor: '#ecebeb',
  speed: 1,
  defaultWidth: '100%',
  defaultHeight: '20'
};

// TODO: Remove below eslint disable rule once more than 1 export created
// eslint-disable-next-line import/prefer-default-export
export const UserLoader = () => (
  <ContentLoader
    height={285}
    speed={loaderSpecs.speed}
    primarycolor={loaderSpecs.primaryColor}
    secondarycolor={loaderSpecs.secondaryColor}
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
