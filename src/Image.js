import React from "react";
import styled from "styled-components";

const StyledImage = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  img {
    height: 50vh;
    box-shadow: 5px 5px 10px gray;
    border-radius: 5px;
  }
`;

function Image({ imageURL }) {
  return (
    <StyledImage className="jumbotron">
      <img src={imageURL} />
    </StyledImage>
  );
}

export default Image;
