import React from "react";
import "./App.css";
import Title from './Title';
import Image from './Image';
import Date from './Date';
import Author from './Author';

function App() {
  return (
    <>
      <Title title={title}/>
      <Image url={imageUrl}/>
      <Date date={date} />
      <Author author={author} />
    </>
  );
}

export default App;
