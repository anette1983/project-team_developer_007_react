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
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 111111,
      }}
    >
      {children}
    </div>
  );
}
