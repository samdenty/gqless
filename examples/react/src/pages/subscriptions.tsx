import { Button, Heading, Stack, Text } from '@chakra-ui/react';
import { useMutation, useSubscription } from '../components/client';

let n = 0;

function SendNotification() {
  const [sendNotification] = useMutation((mutation, message: string) => {
    return mutation.sendNotification({
      message,
    });
  });

  return (
    <>
      <Button
        onClick={() => {
          n++;
          sendNotification({
            args: `NOTIFICATION=${n}`,
          });
        }}
      >
        Send New Notification
      </Button>
      <Button
        onClick={() => {
          sendNotification({
            args: 'ERROR',
          });
        }}
      >
        Send Error Notification
      </Button>
    </>
  );
}

export default function SubscriptionsPage() {
  const subscription = useSubscription();

  return (
    <Stack>
      <Stack>
        <Heading>Data</Heading>
        <Text>{subscription.newNotification}</Text>
      </Stack>
      <SendNotification />
    </Stack>
  );
}
