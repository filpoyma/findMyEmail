import React from 'react';

import UserAvatar from '../components/UserAvatar';
import GetPasswordForm from '../components/GetPasswordForm';

const GetPasswordScreen: React.FC = () => {
  return (
    <>
      <UserAvatar title={'Личный кабинет'} />
      <GetPasswordForm />
    </>
  );
};

export default GetPasswordScreen;
