import React from 'react';
import { NextPage } from 'next';
import { Flex } from '~/components/styles/flex';
import { Box } from '~/components/styles/box';

const Portfolio: NextPage = () => {
  return (
    <Box>
      <Flex css={{ gap: '$8' }} wrap={'wrap'}>
        <embed
          src="https://shobhitsingh-29.github.io "
          style={{ width: '100vw', height: '100vh' }}
        />
      </Flex>
    </Box>
  );
};
export default Portfolio;
