import React from "react";
import Title from "./Title";
import DateSelector from "./Dateselector";
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

function Header({ title, date, setDate, maxDate }) {
  return (
    <StyledHeader className="header">
      <Title title={title} />
      <DateSelector date={date} setDate={setDate} maxDate={maxDate}/>
    </StyledHeader>
  );
}

export default Header;
