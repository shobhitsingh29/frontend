import React, { createContext, useEffect, useState, useContext } from 'react';

export const UserInfoContext = createContext({});

interface Props {
  children: React.ReactNode;
}

export const UserInfoProvider = ({ children }: Props) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    imgData: '',
  });

  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem('userInfo')));
  }, []);
  const updateCurrentUser = async (payload: React.SetStateAction<null>) => {
    setUserInfo(payload);
    localStorage.setItem('userInfo', JSON.stringify(payload));
  };

  return (
    <UserInfoContext.Provider value={{ userInfo, updateCurrentUser }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);
