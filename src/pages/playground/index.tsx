import React, { useEffect } from 'react';
import sdk from '@stackblitz/sdk';
import { Flex } from '~/components/styles/flex';
import { Button } from '@nextui-org/react';

const Playground = () => {
  const PROJECT = {
    js: {
      name: 'js-otmgtp',
      file: 'index.ts',
    },
    react: {
      name: 'stackblitz-starters-8kg1mg',
      file: 'index.ts',
    },
  };

  // @ts-ignore
  function embedProject({ name, file }) {
    sdk.embedProjectId('embed', name, {
      openFile: file,
    });
  }
  useEffect(() => {
    embedProject({ name: PROJECT.js.name, file: PROJECT.js.file });
  }, []);

  return (
    <>
      <Button.Group color="gradient" ghost>
        <Button
          onClick={() =>
            embedProject({
              name: PROJECT.js.name,
              file: PROJECT.js.file,
            })
          }
          color="error"
          icon={
            <img
              src={
                'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png'
              }
            />
          }
        />
        <Button
          onClick={() =>
            embedProject({
              name: PROJECT.react.name,
              file: PROJECT.react.file,
            })
          }
          color="error"
          icon={
            <img
              src={
                'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png'
              }
            />
          }
        />
      </Button.Group>
      <Flex
        style={{
          width: '100vw',
        }}
      >
        <Flex
          id="embed"
          css={{
            height: '88vh',
          }}
        ></Flex>
      </Flex>
    </>
  );
};
export default Playground;
