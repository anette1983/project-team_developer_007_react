import React from 'react';
import ContentLoader from 'react-content-loader';
import { useMediaQuery } from 'react-responsive';
import css from './CategoryLoader.module.css';

const CategoryLoader = props => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const loaderWidth = isTablet ? 768 : isMobile ? 375 : 1440; 

  return (
    <ContentLoader
      className={css.wrapper}
      width={loaderWidth}
      height={900}
      backgroundColor="#f3f3f3"
      foregroundColor="#8BAA36"
      {...props}
    >
      {isDesktop && (
        <>
          <rect x="100" y="50" rx="8" ry="8" width="300" height="323" />
          <rect x="412" y="50" rx="8" ry="8" width="300" height="323" />
          <rect x="724" y="50" rx="8" ry="8" width="300" height="323" />
          <rect x="1036" y="50" rx="8" ry="8" width="300" height="323" />
          <rect x="100" y="470" rx="8" ry="8" width="300" height="323" />
          <rect x="412" y="470" rx="8" ry="8" width="300" height="323" />
          <rect x="724" y="470" rx="8" ry="8" width="300" height="323" />
          <rect x="1036" y="470" rx="8" ry="8" width="300" height="323" />
        </>
      )}

      {isTablet && (
        <>
          <rect x="32" y="50" rx="8" ry="8" width="336" height="323" />
          <rect x="400" y="50" rx="8" ry="8" width="336" height="323" />
          <rect x="32" y="405" rx="8" ry="8" width="336" height="323" />
          <rect x="400" y="405" rx="8" ry="8" width="336" height="323" />
        </>
      )}

      {isMobile && (
        <>
          <rect x="18" y="32" rx="8" ry="8" width="343" height="323" />
          <rect x="18" y="383" rx="8" ry="8" width="343" height="323" />
          <rect x="18" y="734" rx="8" ry="8" width="343" height="323" />
        </>
      )}
    </ContentLoader>
  );
};

export default CategoryLoader;
