import React from "react";
import "./App.css";

import fetchGraphQL from "./fetchGraphQL";

import graphql from "babel-plugin-relay/macro";

import { useFragment, useLazyLoadQuery } from "react-relay/hooks";
import {
  RelayEnvironmentProvider,
  preloadQuery,
  usePreloadedQuery
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import UserComponent from "./User";
import Header from "./Modules/Components/Header";
import Main from "./Modules/Pages/Main";
import Card from "./Modules/Components/Card";
import Spinner from "./Modules/Components/Spinner";

const { Suspense } = React;

// Define a query
const AppQuery = graphql`
  query App_Query($id: ID!) {
    user(id: $id) {
      _id
      id
      name
      email
    }
  }
`;
// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = preloadQuery(RelayEnvironment, AppQuery, {
  id: "VXNlcjo1ZTRlYzM0N2QyMDZjZjA3ZmMyNGExNDc="
  /* query variables */
});

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React is isn't
//   ready to render yet). This will show the nearest <Suspense> fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
function App(props) {
  const data = usePreloadedQuery(AppQuery, props.preloadedQuery);
  console.log(data);
  return (
    <div className="App">
      <Header />
      <Main />
      <Card>
        <p>id: {data.user.id}</p>
        <p>name: {data.user.name}</p>
        <p>email: {data.user.email}</p>
      </Card>
      <Spinner />
    </div>
  );
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
