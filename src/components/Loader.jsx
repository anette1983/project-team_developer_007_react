import { ColorRing } from 'react-loader-spinner';

export default function Loader({
  children = (
    <ColorRing height="150%" width="150%" ariaLabel="blocks-loading" />
  ),
}) {
  return (
    <div
      style={{
        width: 120,
        height: 120,
        position: 'fixed',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 111111,
      }}
    >
      {children}
    </div>
  );
}
