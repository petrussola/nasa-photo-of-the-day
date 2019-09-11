import React from "react";
import "./App.css";
import Title from './Title';
import Image from './Image';
import Date from './Date';

function App() {
  return (
    <>
      <Title title={title}/>
      <Image url={imageUrl}/>
      <Date date={date} />
    </>
  );
}

export default App;
