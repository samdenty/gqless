import { writeGenerate } from '@gqless/cli';
import { app } from './src';

(async () => {
  await app.ready();

  const destinationPath = await writeGenerate(
    app.graphql.schema,
    './src/generated/gqless.ts',
    {
      scalarTypes: {
        ExampleScalar: 'string',
      },
    }
  );

  console.log(`gqless schema generated at ${destinationPath}`);
})();
