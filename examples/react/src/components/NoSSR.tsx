import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

export const NoSSR = dynamic(
  () =>
    Promise.resolve(function NoSSR({ children }: { children: ReactNode }) {
      return <>{children}</>;
    }),
  {
    ssr: false,
  }
);
