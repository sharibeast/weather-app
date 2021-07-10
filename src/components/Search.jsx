import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import styled from "styled-components";

export default function Search() {
  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  `;

  return (
    <Container>
      <input type="text" name="search" id="search" />
      <BiCurrentLocation />
    </Container>
  );
}
