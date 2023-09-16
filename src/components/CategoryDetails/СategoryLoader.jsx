import React from 'react';
import ContentLoader from 'react-content-loader';
import { useMediaQuery } from 'react-responsive';
import css from './CategoryLoader.module.css';

const CategoryLoader = props => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });
  const isMobile = useMediaQuery({
    query: '(min-width: 375px) and (max-width: 767px)',
  });
  const isSmallMobile = useMediaQuery({ query: '(max-width: 374px)' });

  const loaderWidth = isTablet
    ? 768
    : isMobile
    ? 375
    : isSmallMobile
    ? 320
    : 1440;

  return (
    <ContentLoader
      className={css.wrapper}
      width={loaderWidth}
      height={isDesktop ? 900 : 1200}
      backgroundColor="#f3f3f3"
      foregroundColor="#8BAA36"
      {...props}
    >
      {isDesktop && (
        <>
          <rect x="100" y="100" rx="2" ry="2" width="1236" height="20" />
          <rect x="100" y="170" rx="8" ry="8" width="300" height="323" />
          <rect x="412" y="170" rx="8" ry="8" width="300" height="323" />
          <rect x="724" y="170" rx="8" ry="8" width="300" height="323" />
          <rect x="1036" y="170" rx="8" ry="8" width="300" height="323" />
          <rect x="100" y="620" rx="8" ry="8" width="300" height="323" />
          <rect x="412" y="620" rx="8" ry="8" width="300" height="323" />
          <rect x="724" y="620" rx="8" ry="8" width="300" height="323" />
          <rect x="1036" y="620" rx="8" ry="8" width="300" height="323" />
        </>
      )}

      {isTablet && (
        <>
          <rect x="32" y="80" rx="2" ry="2" width="704" height="20" />
          <rect x="32" y="150" rx="8" ry="8" width="336" height="323" />
          <rect x="400" y="150" rx="8" ry="8" width="336" height="323" />

          <rect x="32" y="505" rx="8" ry="8" width="336" height="323" />
          <rect x="400" y="505" rx="8" ry="8" width="336" height="323" />
          <rect x="32" y="860" rx="8" ry="8" width="336" height="323" />
          <rect x="400" y="860" rx="8" ry="8" width="336" height="323" />
        </>
      )}

      {isMobile && (
        <>
          <rect x="18" y="60" rx="2" ry="2" width="343" height="20" />
          <rect x="18" y="117" rx="8" ry="8" width="343" height="323" />
          <rect x="18" y="468" rx="8" ry="8" width="343" height="323" />
          <rect x="18" y="818" rx="8" ry="8" width="343" height="323" />
        </>
      )}
      {isSmallMobile && (
        <>
          <rect x="18" y="60" rx="2" ry="2" width="291.5" height="20" />
          <rect x="14" y="117" rx="8" ry="8" width="291.5" height="274.5" />
          <rect x="14" y="413.16" rx="8" ry="8" width="291.5" height="274.5" />
          <rect x="14" y="709.32" rx="8" ry="8" width="291.5" height="274.5" />
        </>
      )}
    </ContentLoader>
  );
};

export default CategoryLoader;
