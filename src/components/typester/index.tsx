import dynamic from 'next/dynamic';
import React from 'react';
import 'react-quill/dist/quill.snow.css';
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function Typester({ value, setValue }) {
  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}
