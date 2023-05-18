import { NextPage } from 'next';
import { useUserInfo } from '~/contextProviders/userInfoProvider';
import { Flex } from '~/components/styles/flex';
import { Button, Input } from '@nextui-org/react';
import React from 'react';
import { useRouter } from 'next/router';
import Email from '~/components/email';

const SignIn: NextPage = () => {
  const [email, setEmail] = React.useState(false);
  const [password, setPassword] = React.useState(false);
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { userInfo, updateCurrentUser } = useUserInfo();

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
        <Email
          onChange={(e: {
            target: { value: boolean | ((prevState: boolean) => boolean) };
          }) => setEmail(e.target.value)}
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
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </Flex>
      <Button
        auto
        onClick={() => {
          updateCurrentUser({ email, password });
          router.push(`/`);
        }}
      >
        Submit
      </Button>
    </Flex>
  );
};

export default SignIn;
