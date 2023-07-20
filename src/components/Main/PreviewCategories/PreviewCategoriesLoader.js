import React from 'react';
import ContentLoader from 'react-content-loader';
import { useMediaQuery } from 'react-responsive';

const CategoryLoader = props => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(min-width: 375px)' });

  return (
    <>
      {isDesktop && (
        <ContentLoader
          width={1600}
          height={900}
          backgroundColor="#f3f3f3"
          foregroundColor="#8BAA36"
          {...props}
        >
          <rect x="0" y="64" rx="8" ry="8" width="350" height="45" />
          <rect x="0" y="158" rx="8" ry="8" width="300" height="323" />
          <rect x="313" y="158" rx="8" ry="8" width="300" height="323" />
          <rect x="626" y="158" rx="8" ry="8" width="300" height="323" />
          <rect x="938" y="158" rx="8" ry="8" width="300" height="323" />
          {/* <rect x="100" y="506" rx="8" ry="8" width="300" height="323" />
          <rect x="412" y="506" rx="8" ry="8" width="300" height="323" />
          <rect x="724" y="506" rx="8" ry="8" width="300" height="323" />
          <rect x="1036" y="506" rx="8" ry="8" width="300" height="323" /> */}
        </ContentLoader>
      )}

      {isTablet && (
        <ContentLoader
          width={1600}
          height={900}
          backgroundColor="#f3f3f3"
          foregroundColor="#8BAA36"
          {...props}
        >
          <rect x="0" y="64" rx="8" ry="8" width="300" height="44" />
          <rect x="0" y="148" rx="8" ry="8" width="336" height="323" />
          <rect x="368" y="148" rx="8" ry="8" width="336" height="323" />
        </ContentLoader>
      )}

      {isMobile && (
        <ContentLoader
          width={1600}
          height={900}
          backgroundColor="#f3f3f3"
          foregroundColor="#5fae81"
          {...props}
        >
          <rect x="0" y="64" rx="8" ry="8" width="250" height="30" />
          <rect x="0" y="124" rx="8" ry="8" width="343" height="323" />
        </ContentLoader>
      )}
    </>
  );
};

export default CategoryLoader;
