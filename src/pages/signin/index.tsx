import { NextPage } from 'next';
import { useUserInfo } from '~/contextProviders/userInfoProvider';
import { Flex } from '~/components/styles/flex';
import { Button, Input } from '@nextui-org/react';
import React from 'react';
import { useRouter } from 'next/router';

const SignIn: NextPage = () => {
  const [email, setEmail] = React.useState(false);
  const [password, setPassword] = React.useState(false);
  const router = useRouter();

  const { userInfo, fetchCurrentUser } = useUserInfo();

  return (
    <Flex
      direction={'column'}
      css={{
        flexWrap: 'wrap',
        gap: '$8',
        '@lg': { flexWrap: 'nowrap', gap: '$12' },
      }}
    >
      <Flex
        css={{
          gap: '$10',
          flexWrap: 'wrap',
          '@lg': { flexWrap: 'nowrap' },
        }}
      >
        <Input
          label="Email"
          clearable
          bordered
          fullWidth
          size="lg"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </Flex>
      <Flex
        css={{
          gap: '$10',
          flexWrap: 'wrap',
          '@lg': { flexWrap: 'nowrap' },
        }}
      >
        <Input
          label="Password"
          clearable
          bordered
          fullWidth
          size="lg"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </Flex>
      <Button
        auto
        onClick={() => {
          fetchCurrentUser({ email, password });
          router.push(`/`);
        }}
      >
        Submit
      </Button>
    </Flex>
  );
};

export default SignIn;
