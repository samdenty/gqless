/** @jsxImportSource @emotion/react */

import { useRef } from "react";

import { useMutation, query } from "../gqless";

export function CreatePost() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [createPost, { isLoading }] = useMutation(
    (mutation, title: string) => {
      return mutation.createPost({
        post: {
          title,
        },
      }).title;
    },
    {
      refetchQueries: [query.currentUser],
      awaitRefetchQueries: true,
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
