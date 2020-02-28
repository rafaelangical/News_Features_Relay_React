import React from "react";

import { useFragment } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";

function UserComponent(props) {
  const data = useFragment(
    graphql`
      fragment UserComponent_user on User {
        name
        id
        email
        _id
      }
    `,
    props.user
  );

  console.log(data);
  return (
    <>
      {/* <h1>{data.name}</h1> */}
      <div>{/* <img src={data.profile_picture?.uri} /> */}</div>
    </>
  );
}

export default UserComponent;
