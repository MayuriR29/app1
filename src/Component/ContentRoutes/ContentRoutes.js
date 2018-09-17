import React from "react";
import Route from "react-router-dom/Route";

const User = ({ match }) => {
  return <h1>Welcome User {match.params.username}</h1>;
};
const ContentRoutes = () => {
  return (
    <div style={{ background: "#fff", padding: 24, minHeight: 700 }}>
      <Route
        exact
        strict
        path="/"
        render={() => {
          return <h1>Welcome home</h1>;
        }}
      />
      <Route
        exact
        strict
        path="/about"
        render={() => {
          return <h1>Welcome about</h1>;
        }}
      />
      <Route exact strict path="/user/:username" render={User} />
    </div>
  );
};

export default ContentRoutes;
