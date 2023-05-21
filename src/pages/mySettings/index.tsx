import { Uploader } from 'uploader'; // Installed by "react-uploader".
import { UploadDropzone } from 'react-uploader';
import { useUserInfo } from '~/contextProviders/userInfoProvider';
import { useEffect, useState } from 'react';
import { trpc } from '~/utils/trpc';
import { inferProcedureInput } from '@trpc/server';
import { AppRouter } from '~/server/routers/_app';
import { v4 as uuidv4 } from 'uuid';

// Initialize once (at the start of your app).
const uploader = Uploader({
  apiKey: 'free', // Get production API keys from Upload.io
});

// Configuration options: https://upload.io/uploader#customize
const options = { multi: true };

const MySettings = () => {
  const uniqueId = uuidv4();
  const [imgData, setImageData] = useState('');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { userInfo, updateCurrentUser } = useUserInfo();
  const addImage = trpc.uploadimg.add.useMutation();

  const uploadProfilePic = async () => {
    try {
      type Input = inferProcedureInput<AppRouter['uploadimg']['add']>;
      //    ^?
      const input: Input = {
        id: uniqueId as string,
        url: userInfo.imgData as string,
        email: userInfo.email as string,
      };

      await addImage.mutateAsync(input);
    } catch (cause) {
      console.error({ cause }, 'Failed to add post');
    }
  };

  useEffect(() => {
    if (imgData) {
      updateCurrentUser({ ...userInfo, imgData });
    }
  }, [imgData]);

  useEffect(() => {
    if (imgData.length) {
      uploadProfilePic();
    }
  }, [imgData]);

  return (
    <UploadDropzone
      uploader={uploader}
      options={options}
      onUpdate={(files) => {
        setImageData(files.map((x) => x.fileUrl).join('\n'));
      }}
      width="600px"
      height="375px"
    />
  );
};
export default MySettings;
