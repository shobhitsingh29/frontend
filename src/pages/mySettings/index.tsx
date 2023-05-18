import { Uploader } from 'uploader'; // Installed by "react-uploader".
import { UploadDropzone } from 'react-uploader';
import { useUserInfo } from '~/contextProviders/userInfoProvider';
import { useEffect, useState } from 'react';

// Initialize once (at the start of your app).
const uploader = Uploader({
  apiKey: 'free', // Get production API keys from Upload.io
});

// Configuration options: https://upload.io/uploader#customize
const options = { multi: true };

const MySettings = () => {
  const [imgData, setImageData] = useState('');
  const { userInfo, updateCurrentUser } = useUserInfo();

  useEffect(() => {
    if (imgData) {
      updateCurrentUser({ ...userInfo, imgData });
    }
  }, [imgData, updateCurrentUser]);

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
