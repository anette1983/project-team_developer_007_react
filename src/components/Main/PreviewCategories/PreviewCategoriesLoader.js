import React from 'react';
import ContentLoader from 'react-content-loader';
import { useMediaQuery } from 'react-responsive';

const CategoryLoader = props => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });
  const isMobile = useMediaQuery({
    query: '(min-width: 375px) and (max-width: 767px)',
  });

  const isSmallMobile = useMediaQuery({ query: '(max-width: 374px)' });

  // const loaderWidth = isTablet ? 768 : isMobile ? 375 : 1440;

  const loaderWidth = isTablet
    ? 768
    : isMobile
    ? 375
    : isSmallMobile
    ? 320
    : 1440;

  return (
    <ContentLoader
      width={loaderWidth}
      height={1200}
      backgroundColor="#f3f3f3"
      foregroundColor="#8BAA36"
      {...props}
    >
      {isDesktop && (
        <>
          <rect x="0" y="0" rx="8" ry="8" width="350" height="45" />
          <rect x="0" y="94" rx="8" ry="8" width="300" height="323" />
          <rect x="313" y="94" rx="8" ry="8" width="300" height="323" />
          <rect x="626" y="94" rx="8" ry="8" width="300" height="323" />
          <rect x="938" y="94" rx="8" ry="8" width="300" height="323" />

          <rect x="0" y="605" rx="8" ry="8" width="350" height="45" />
          <rect x="0" y="699" rx="8" ry="8" width="300" height="323" />
          <rect x="313" y="699" rx="8" ry="8" width="300" height="323" />
          <rect x="626" y="699" rx="8" ry="8" width="300" height="323" />
          <rect x="938" y="699" rx="8" ry="8" width="300" height="323" />
        </>
      )}
      {isTablet && (
        <>
          <rect x="0" y="0" rx="8" ry="8" width="250" height="44" />
          <rect x="0" y="84" rx="8" ry="8" width="336" height="323" />
          <rect x="368" y="84" rx="8" ry="8" width="336" height="323" />

          <rect x="0" y="545" rx="8" ry="8" width="250" height="44" />
          <rect x="0" y="629" rx="8" ry="8" width="336" height="323" />
          <rect x="368" y="629" rx="8" ry="8" width="336" height="323" />
        </>
      )}
      {isMobile && (
        <>
          <rect x="0" y="0" rx="8" ry="8" width="250" height="30" />
          <rect x="0" y="60" rx="8" ry="8" width="343" height="323" />
          <rect x="0" y="477" rx="8" ry="8" width="250" height="30" />
          <rect x="0" y="537" rx="8" ry="8" width="343" height="323" />
          <rect x="0" y="954" rx="8" ry="8" width="250" height="30" />
          <rect x="0" y="1014" rx="8" ry="8" width="343" height="323" />
        </>
      )}
      {isSmallMobile && (
        <>
          <rect x="0" y="0" rx="8" ry="8" width="213" height="30" />
          <rect x="0" y="60" rx="8" ry="8" width="291.5" height="274.5" />
          <rect x="0" y="477" rx="8" ry="8" width="213" height="30" />
          <rect x="0" y="537" rx="8" ry="8" width="291.5" height="274.5" />
          <rect x="0" y="954" rx="8" ry="8" width="213" height="30" />
          <rect x="0" y="1014" rx="8" ry="8" width="291.5" height="274.5" />
        </>
      )}
    </ContentLoader>
  );
};

export default CategoryLoader;
