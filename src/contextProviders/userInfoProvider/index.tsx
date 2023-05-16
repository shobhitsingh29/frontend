import React, { createContext, useState } from 'react';

export const UserInfoContext = createContext({});

interface Props {
  children: React.ReactNode;
}

export const UserInfoProvider = ({ children }: Props) => {
  const [userInfo, setUserInfo] = useState(null);

  const fetchCurrentUser = async (payload: React.SetStateAction<null>) => {
    setUserInfo(payload);
  };

  return (
    <UserInfoContext.Provider value={{ userInfo, fetchCurrentUser }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => React.useContext(UserInfoContext);
