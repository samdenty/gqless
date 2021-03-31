import React from 'react';

import { ExamplesPage } from '../../../components/Examples/App';
import { StackBlitzEmbed } from '../../../components/Examples/StackblitzEmbed';

export default function Page() {
  return (
    <ExamplesPage title="Example React Suspense Query">
      <StackBlitzEmbed file="src/components/Login.tsx" />
    </ExamplesPage>
  );
}
