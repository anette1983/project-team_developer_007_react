import React from 'react';
import ContentLoader from 'react-content-loader';
import { useMediaQuery } from 'react-responsive';
import css from '../../components/CategoryDetails/CategoryLoader.module.css';

const SearchPageLoader = props => {
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
      height={isTablet ? 1200 : 900}
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
          <rect x="32" y="18" rx="8" ry="8" width="336" height="323" />
          <rect x="400" y="18" rx="8" ry="8" width="336" height="323" />

          <rect x="32" y="373" rx="8" ry="8" width="336" height="323" />
          <rect x="400" y="373" rx="8" ry="8" width="336" height="323" />
          <rect x="32" y="728" rx="8" ry="8" width="336" height="323" />
          <rect x="400" y="728" rx="8" ry="8" width="336" height="323" />
        </>
      )}

      {isMobile && (
        <>
          <rect x="18" y="0" rx="8" ry="8" width="343" height="323" />
          <rect x="18" y="351" rx="8" ry="8" width="343" height="323" />
          <rect x="18" y="701" rx="8" ry="8" width="343" height="323" />
        </>
      )}
      {isSmallMobile && (
        <>
          <rect x="14" y="0" rx="8" ry="8" width="291.5" height="274.5" />
          <rect x="14" y="296.16" rx="8" ry="8" width="291.5" height="274.5" />
          <rect x="14" y="592.32" rx="8" ry="8" width="291.5" height="274.5" />
        </>
      )}
    </ContentLoader>
  );
};

export default SearchPageLoader;
