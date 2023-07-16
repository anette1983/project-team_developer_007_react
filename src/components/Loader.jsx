import { ColorRing } from 'react-loader-spinner';

export default function Loader({
  children = (
    <ColorRing height="100%" width="100%" ariaLabel="blocks-loading" />
  ),
}) {
  return (
    <div
      style={{
        width: 120,
        height: 120,
        margin: '0 auto',
        marginTop: 24,
      }}
    >
      {children}
    </div>
  );
}
