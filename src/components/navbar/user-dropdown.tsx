import { Avatar, Dropdown, Navbar, Text } from '@nextui-org/react';
import React from 'react';
import { DarkModeSwitch } from './darkmodeswitch';
import { useRouter } from 'next/router';
import { useUserInfo } from '~/contextProviders/userInfoProvider';

export const UserDropdown = () => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { userInfo } = useUserInfo();
  return (
    <Dropdown placement="bottom-right">
      <Navbar.Item>
        <Dropdown.Trigger>
          <Avatar
            bordered
            as="button"
            color="secondary"
            size="md"
            src={
              userInfo?.imgData ??
              'https://i.pravatar.cc/150?u=a042581f4e29026704d'
            }
          />
        </Dropdown.Trigger>
      </Navbar.Item>
      <Dropdown.Menu
        aria-label="User menu actions"
        onAction={(actionKey) => console.log({ actionKey })}
      >
        <Dropdown.Item key="profile" css={{ height: '$18' }}>
          <Text b color="inherit" css={{ d: 'flex' }}>
            Signed in as
          </Text>
          <Text b color="inherit" css={{ d: 'flex' }}>
            zoey@example.com
          </Text>
        </Dropdown.Item>
        <Dropdown.Item key="settings" withDivider>
          <span onClick={() => router.push(`/mySettings`)}>My Settings</span>
        </Dropdown.Item>
        <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
        <Dropdown.Item key="analytics" withDivider>
          Analytics
        </Dropdown.Item>
        <Dropdown.Item key="system">System</Dropdown.Item>
        <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
        <Dropdown.Item key="help_and_feedback" withDivider>
          Help & Feedback
        </Dropdown.Item>
        <Dropdown.Item key="logout" withDivider color="error">
          <span onClick={() => router.push(`/logout`)}>Log Out</span>
        </Dropdown.Item>
        <Dropdown.Item key="switch" withDivider>
          <DarkModeSwitch />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
