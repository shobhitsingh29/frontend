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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const localStorageUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setUserInfo(localStorageUserInfo);
    return () => {
      localStorage.removeItem('userInfo');
    };
  }, []);

  const updateCurrentUser = async (payload: React.SetStateAction<null>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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
