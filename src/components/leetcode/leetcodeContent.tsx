import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Flex } from '~/components/styles/flex';
export const LeetcodeContent = () => {
  return (
    <Flex css={{ gap: '$8' }}>
      <Flex
        direction={'column'}
        css={{ gap: '$8' }}
        align={'center'}
        justify={'end'}
        wrap={'wrap'}
      >
        <div
          style={{
            transform: 'translate(20%, -11%)',
            position: 'absolute',
            zIndex: '1',
          }}
        >
          <ReactMarkdown>
            ![Leetcode
            Stats](https://leetcard.jacoblin.cool/shobhitsingh29?ext=heatmap&font=source_code_pro&cache=3600)
          </ReactMarkdown>
        </div>
        <div
          style={{
            transform: 'translate(20%,40%)',
          }}
        >
          <ReactMarkdown>
            ![Leetcode
            Stats](https://leetcard.jacoblin.cool/shobhitsingh29?ext=activity&font=source_code_pro&cache=3600)
          </ReactMarkdown>
        </div>
      </Flex>
      <Flex
        style={{
          width: '40vw',
          height: '40vh',
          transform: 'translate(20%,12%)',
        }}
      >
        <embed
          src="https://leetcode.com/shobhitsingh29"
          style={{
            width: '90vw',
            height: '80vh',
            borderRadius: '4px',
          }}
        />
      </Flex>
    </Flex>
  );
};
