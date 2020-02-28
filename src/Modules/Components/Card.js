import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 300px;
  margin: 0 auto;
  color: darkred;
  margin-top: 16px;
  border-radius: 10px;
  border: 1px solid #955;
`;
export default function Card(props) {
  return <Wrapper>{props.children}</Wrapper>;
}
