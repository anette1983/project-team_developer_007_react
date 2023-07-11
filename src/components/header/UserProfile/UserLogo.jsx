import { useState } from 'react';
import UserLogoModal from './UserLogoModal';

const UserLogo = () => {
  const [isUserLogoModal, setIsUserLogoModal] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={e => {
          console.log('click on UserLogo');
          setIsUserLogoModal(true);
        }}
      >
        User Logo
      </button>

      {isUserLogoModal && (
        <UserLogoModal closeUserLogoModal={() => setIsUserLogoModal(false)} />
      )}
    </div>
  );
};
export default UserLogo;
