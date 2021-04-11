/** @jsxImportSource @emotion/react */

import "./index.css";

import { Fragment, Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import { Hello } from "./components/Hello";
import { Login } from "./components/Login";
import { MyPosts } from "./components/MyPosts";
import { Register } from "./components/Register";
import { setAuthorizationToken } from "./gqless";
import { useCurrentUser } from "./hooks/currentUser";

const hashHref = "#";
function NavigationAuth() {
  const { currentUser } = useCurrentUser();

  if (currentUser.user) {
    return (
      <Fragment>
        <li>
          <a
            href={hashHref}
            onClick={(ev) => {
              ev.preventDefault();
              setAuthorizationToken(null);
              currentUser.user = null;
            }}
          >
            Logout
          </a>
        </li>

        <li>
          <Link to="/my_posts">My Posts</Link>
        </li>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </Fragment>
  );
}

function Navigation() {
  return (
    <nav>
      <ul
        css={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          listStyle: "none",
          li: {
            padding: "5px",
          },
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <Suspense fallback={null}>
          <NavigationAuth />
        </Suspense>
      </ul>
    </nav>
  );
}

function App() {
  const { currentUser } = useCurrentUser(false);
  return (
    <div css={{ display: "flex", flexDirection: "column" }}>
      <Router>
        <Navigation />

        <Suspense fallback="Root Suspense Loading...">
          <Switch>
            <Route exact path="/">
              <Hello />
            </Route>

            <Route path="/my_posts">
              {currentUser.user?.id && <MyPosts />}
            </Route>

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

render(<App />, document.getElementById("root"));
