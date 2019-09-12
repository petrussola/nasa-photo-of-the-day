import React from "react";
import Date from "./Date";
import Author from "./Author";
import Source from "./Source";
import Description from "./Description";
import styled from "styled-components";

const StyledContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
  }
  section {
    width: 33%;
    padding: 1rem 0;
    border-bottom: 0.5px dotted #cccccc;
    @media (max-width: 500px) {
      width: 100%;
      border-bottom: 0px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0.5rem 0;
    }
    &:nth-child(2) {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    &:nth-child(3) {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      @media (max-width: 500px) {
        justify-content: center;
      }
    }
    &.description {
      width: 100%;
      margin: 0 auto 2rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      text-align: justify;
    }
    @media (max-width: 500px) {
      &:last-child {
        border-bottom: 0.5px dotted #cccccc;
      }
    }
  }
`;

function Content(props) {
  const { date, author, description, test } = props;

  return (
    <StyledContent className="content">
      <Date dateText={date} />
      <Author authorText={author} />
      <Source />
      <Description descriptionText={description} />
    </StyledContent>
  );
}

export default Content;
