import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = props => (
  <ContentLoader
    width={1600}
    height={1875}
    // viewBox="0 0 800 575"
    backgroundColor="#f3f3f3"
    foregroundColor="#797979"
    {...props}
  >
    <rect x="100" y="50" rx="8" ry="8" width="300" height="323" />
    <rect x="412" y="50" rx="8" ry="8" width="300" height="323" />
    <rect x="724" y="50" rx="8" ry="8" width="300" height="323" />
    <rect x="1036" y="50" rx="8" ry="8" width="300" height="323" />
    <rect x="100" y="450" rx="8" ry="8" width="300" height="323" />
    <rect x="412" y="450" rx="8" ry="8" width="300" height="323" />
    <rect x="724" y="450" rx="8" ry="8" width="300" height="323" />
    <rect x="1036" y="450" rx="8" ry="8" width="300" height="323" />
  </ContentLoader>
);

export default MyLoader;
