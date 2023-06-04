import React from 'react';
import { Box } from '~/components/styles/box';
import { Flex } from '~/components/styles/flex';
const Google = () => {
  return (
    <Box>
      <Flex css={{ gap: '$8' }} wrap={'wrap'}>
        <embed
          src="https://proxysite.us/?cdURL=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8="
          style={{ width: '100vw', height: '100vh' }}
        />
      </Flex>
    </Box>
  );
};
export default Google;
