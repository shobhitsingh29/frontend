import React, { createContext, useEffect, useState, useContext } from 'react';
import { trpc } from '~/utils/trpc';

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

  const postsQuery = trpc.upload.byId.useQuery({ id: 1 });
  useEffect(() => {
    console.log(postsQuery.data, '***');
  }, [postsQuery.data]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setUserInfo(JSON.parse(localStorage.getItem('userInfo')));
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
