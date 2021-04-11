import { setAuthorizationToken, useQuery } from "../gqless";
import { useEffect } from "react";

export function useCurrentUser(suspense = true) {
  const { currentUser } = useQuery({
    prepare({ prepass, query: { currentUser } }) {
      prepass(currentUser, "error", "token", "user.email");
    },
    suspense,
  });

  const token = currentUser.token;
  useEffect(() => {
    if (token !== undefined) setAuthorizationToken(token);
  }, [token]);

  return {
    currentUser,
  };
}
