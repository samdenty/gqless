/** @jsxImportSource @emotion/react */

import { Fragment, Suspense, useState } from "react";

import { useQuery, graphql, query } from "../gqless";

function NamesList({ n }: { n: number }) {
  const { namesList } = useQuery();

  return (
    <ol>
      {namesList({
        n,
      }).map((name, index) => {
        return <li key={index}>{name}</li>;
      })}
    </ol>
  );
}

function Names() {
  const [n, setN] = useState(10);
  return (
    <Fragment>
      <label>Number of names</label>
      <input
        value={n}
        onChange={(ev) => setN(Math.max(ev.target.valueAsNumber, 0))}
        css={{
          width: "100px",
        }}
        type="number"
      />

      <Suspense fallback={<p>Names Loading...</p>}>
        <NamesList n={n} />
      </Suspense>
    </Fragment>
  );
}

const HelloWorld = graphql(
  function HelloWorld() {
    return (
      <h1
        css={{
          fontSize: "2em",
        }}
      >
        {query.hello}
      </h1>
    );
  },
  {
    suspense: {
      fallback: <p>Hello Loading...</p>,
    },
  }
);

export function Hello() {
  return (
    <Fragment>
      <HelloWorld />
      <Names />
    </Fragment>
  );
}
