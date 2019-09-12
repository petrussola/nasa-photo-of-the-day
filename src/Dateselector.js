import React from "react";

function DateSelector({date, setDate, maxDate}) {
  return (
    <form id='date'>
      <input type="date" id='date' value={date} max={maxDate} onChange={(e) => setDate(e)}></input>
    </form>
  );
}

export default DateSelector;