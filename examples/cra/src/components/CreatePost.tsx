/** @jsxImportSource @emotion/react */

import { getFields } from "gqless";
import { useRef } from "react";

import { CursorConnectionArgs, useMutation } from "../gqless";

export function CreatePost({
  fetchMore,
}: {
  fetchMore: (args: CursorConnectionArgs) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [createPost, { isLoading }] = useMutation(
    (mutation, title: string) => {
      return getFields(
        mutation.createPost({
          post: {
            title,
          },
        })
      );
    },
    {
      onCompleted(_data) {
        fetchMore({
          first: 5,
        });
      },
    }
  );

  return (
    <form css={{ display: "flex", flexDirection: "column" }}>
      <label>Input your new post title</label>
      <input disabled={isLoading} ref={inputRef} placeholder="Post Title" />
      <button
        disabled={isLoading}
        onClick={(ev) => {
          ev.preventDefault();
          if (!inputRef.current?.value) return;

          createPost({
            args: inputRef.current.value,
          }).then(() => {
            inputRef.current!.value = "";
            inputRef.current!.focus();
          });
        }}
      >
        Create Post{isLoading && "..."}
      </button>
    </form>
  );
}
