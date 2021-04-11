/** @jsxImportSource @emotion/react */

import { prepass } from "gqless";
import { useRef } from "react";

import { useMutation } from "../gqless";
import { useCurrentUser } from "../hooks/currentUser";

export function Register() {
  const { currentUser } = useCurrentUser();
  const [register, { data, isLoading, error }] = useMutation(
    ({ register }, email: string) => {
      return prepass(
        register({
          input: {
            email,
          },
        }),
        "user.email",
        "error",
        "token"
      );
    }
  );
  const inputRef = useRef<HTMLInputElement>(null);

  if (currentUser.user) return <p>Already Logged in</p>;

  const errorMessage = (data && data.error) || (error && error.message);

  return (
    <div>
      {errorMessage ? <p css={{ color: "red" }}>{errorMessage}</p> : null}
      <form
        css={{ display: "flex", flexDirection: "column", maxWidth: "350px" }}
      >
        <label>Email</label>
        <input
          css={{ fontSize: "1.2em" }}
          ref={inputRef}
          placeholder="Put your email"
        />

        <button
          css={{
            marginTop: "5px",
            backgroundColor: "rgb(0,0, 100)",
            color: "white",
            borderRadius: "5px",
            padding: "5px",
            fontWeight: "bold",
          }}
          disabled={isLoading}
          onClick={(ev) => {
            ev.preventDefault();
            register({
              args: inputRef.current!.value,
            }).catch(console.error);
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}
