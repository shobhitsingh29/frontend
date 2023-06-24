import React from 'react';
import { Card } from '@nextui-org/react';
import Draggable from 'react-draggable';
import { Flex } from '~/components/styles/flex';
export const Spotify = () => {
  return (
    <Draggable
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onStart={(e) => {
        return e.metaKey;
      }}
    >
      <Flex
        align={'center'}
        justify={'center'}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '10px auto',
        }}
      >
        <Card
          css={{
            mw: '100%',
            bg: '$accents0',
            borderRadius: '$xl',
          }}
          style={{
            height: '100px',
            width: '97%',
            outline: 'none',
            padding: 0,
            border: 0,
            resize: 'both',
            overflow: 'hidden',
          }}
        >
          <Card.Body css={{ py: '-$5' }}>
            <iframe
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DWStljCmevj7t?utm_source=generator"
              style={{ flexGrow: 1, border: 0, margin: '10px 0px' }}
              allow="autoplay;
      clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </Card.Body>
        </Card>
      </Flex>
    </Draggable>
  );
};
