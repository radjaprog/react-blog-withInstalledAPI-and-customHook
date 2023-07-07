import React from "react";
import { Switch, Route } from "react-router-dom";
import AppPosts from "./pages/AppPosts";
import SinglePost from "./pages/SinglePost";
import AddPost from "./pages/AddPost";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/posts">
        <AppPosts />
      </Route>
      <Route path="/posts/:id">
        <SinglePost />
      </Route>
      <Route path="/add">
        <AddPost />
      </Route>
      <Route path="/edit/:id">
        <AddPost />
      </Route>
    </Switch>
  );
}
