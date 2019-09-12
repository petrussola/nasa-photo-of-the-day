import React from "react";

function DateSelector({date, setDate}) {
  return (
    <form id='date'>
      <input type="date" id='date' value={date} onChange={(e) => setDate(e)}></input>
    </form>
  );
}

export default DateSelector;