/** @jsxImportSource @emotion/react */

import { useRef } from "react";

import { uniqBy } from "@gqless/react";

import {
  CursorConnectionArgs,
  useMutation,
  usePaginatedQuery,
} from "../gqless";
import { CreatePost } from "./CreatePost";

const first = 5;

export function MyPosts() {
  const { data, fetchMore, isLoading } = usePaginatedQuery(
    (query, input: CursorConnectionArgs, { prepass }) => {
      const posts = query.currentUser.user!.posts({
        input,
      });

      return prepass(
        posts,
        "nodes.title",
        "pageInfo.hasNextPage",
        "pageInfo.endCursor"
      );
    },
    {
      fetchPolicy: "cache-and-network",
      initialArgs: {
        first,
      },
      merge({ data: { existing, incoming }, uniqBy, sortBy }) {
        if (existing) {
          return {
            ...incoming,
            nodes: sortBy(
              uniqBy([...incoming.nodes, ...existing.nodes], (v) => v.id),
              (v) => ~~v.id!,
              "desc"
            ),
          };
        }

        return incoming;
      },
    }
  );

  const removedPostId = useRef<string>();

  const [removePost, mutationState] = useMutation(
    (mutation, postId: string) => {
      return mutation.removeOwnPost({
        postId,
      });
    },
    {
      onCompleted() {
        data?.nodes.splice(
          data.nodes.findIndex((v) => v.id === removedPostId.current),
          1
        );
      },
    }
  );

  if (!data) return <p>Loading..</p>;

  return (
    <div css={{ display: "flex", flexDirection: "column" }}>
      <p>{data.nodes.length} Loaded Posts</p>
      <ul>
        {uniqBy(data.nodes, (v) => v.id).map((post) => {
          return (
            <li key={post.id || -1}>
              {post.title} - {post.id}
              <button
                disabled={mutationState.isLoading}
                onClick={() => {
                  removedPostId.current = post.id!;
                  removePost({
                    args: post.id!,
                  });
                }}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
      {data.pageInfo.hasNextPage && (
        <button
          disabled={isLoading}
          onClick={() => {
            fetchMore({
              first,
              after: data.pageInfo.endCursor,
            });
          }}
        >
          More posts{isLoading && "..."}
        </button>
      )}
      <CreatePost fetchMore={fetchMore} />
    </div>
  );
}
