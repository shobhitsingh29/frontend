import React from 'react';
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox-next';
import { PaletteTree } from './palette';
import IndexPage from '~/pages';
import CandidatesPage from '~/pages/candidates';
import { Content } from '~/components/home/content';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/IndexPage">
        <IndexPage />
      </ComponentPreview>
      <ComponentPreview path="/CandidatesPage">
        <CandidatesPage />
      </ComponentPreview>
      <ComponentPreview path="/Content">
        <Content />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
