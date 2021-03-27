import { Input, Stack, Text } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { useMutation } from '../components/client';

export default function UploadFile() {
  const [imageb64, setImageb64] = useState('');
  const [uploadFile, { isLoading }] = useMutation(
    (mutation, file: File) => {
      return mutation.uploadFile({
        file,
      })!;
    },
    {
      onCompleted(data) {
        setImageb64(data);
      },
      noCache: true,
    }
  );
  return (
    <Stack>
      <Input
        width="fit-content"
        isDisabled={isLoading}
        type="file"
        isRequired
        multiple
        onChange={({
          target: { validity, files },
        }: ChangeEvent<HTMLInputElement>) => {
          files && validity.valid && uploadFile({ args: files[0] });
        }}
      />
      {imageb64 ? <img src={'data:image/png;base64,' + imageb64} /> : null}
    </Stack>
  );
}
