import React from 'react';
import ContentLoader from 'react-content-loader';
import { useMediaQuery } from 'react-responsive';

const MyRecipesPageLoader = props => {
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
          <rect x="0" y="0" rx="8" ry="8" width="1240" height="404" />
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
          <rect x="0" y="0" rx="8" ry="8" width="704" height="288" />
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
          <rect x="0" y="0" rx="8" ry="8" width="343" height="152" />
        </ContentLoader>
      )}
    </>
  );
};

export default MyRecipesPageLoader;
