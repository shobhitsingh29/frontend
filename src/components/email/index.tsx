import { Input } from '@nextui-org/react';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Email = ({ onChange }) => (
  <Input
    label="Email"
    clearable
    bordered
    fullWidth
    size="lg"
    onChange={onChange}
    placeholder="Email"
  />
);
export default Email;
