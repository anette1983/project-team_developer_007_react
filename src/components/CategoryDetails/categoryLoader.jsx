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
          <rect x="100" y="78" rx="8" ry="8" width="300" height="323" />
          <rect x="412" y="78" rx="8" ry="8" width="300" height="323" />
          <rect x="724" y="78" rx="8" ry="8" width="300" height="323" />
          <rect x="1036" y="78" rx="8" ry="8" width="300" height="323" />
          <rect x="100" y="506" rx="8" ry="8" width="300" height="323" />
          <rect x="412" y="506" rx="8" ry="8" width="300" height="323" />
          <rect x="724" y="506" rx="8" ry="8" width="300" height="323" />
          <rect x="1036" y="506" rx="8" ry="8" width="300" height="323" />
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
          <rect x="32" y="78" rx="8" ry="8" width="336" height="323" />
          <rect x="400" y="78" rx="8" ry="8" width="336" height="323" />
          <rect x="32" y="433" rx="8" ry="8" width="336" height="323" />
          <rect x="400" y="433" rx="8" ry="8" width="336" height="323" />
        </ContentLoader>
      )}

      {isMobile && (
        <ContentLoader
          width={1600}
          height={900}
          backgroundColor="#f3f3f3"
          foregroundColor="#8BAA36"
          {...props}
        >
          <rect x="18" y="60" rx="8" ry="8" width="343" height="323" />
          <rect x="18" y="411" rx="8" ry="8" width="343" height="323" />
          <rect x="18" y="762" rx="8" ry="8" width="343" height="323" />
        </ContentLoader>
      )}
    </>
  );
};

export default CategoryLoader;
