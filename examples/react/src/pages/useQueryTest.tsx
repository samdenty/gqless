import { useEffect } from 'react';
import { useQuery } from '../components/client';

let nRender = 0;
let nCommitedRender = 0;

export default function UseQueryPage() {
  const { time, $state } = useQuery({
    suspense: true,
  });

  useEffect(() => {
    console.log('Commited render:', ++nCommitedRender);
  });

  if ($state.isLoading) {
    console.log('IS LOADING!');
    return (
      <p>
        Loading... <br /> Render: {++nRender}
      </p>
    );
  }

  return (
    <div>
      {time}
      <br />
      Render: {++nRender}
    </div>
  );
}
