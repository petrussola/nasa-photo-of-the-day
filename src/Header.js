import React from "react";
import Title from "./Title";
import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 0.5px dotted #cccccc;
  padding: 1rem 0;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

function Header({ title }) {
  return (
    <StyledHeader className="header">
      <Title title={title} />
    </StyledHeader>
  );
}

export default Header;
