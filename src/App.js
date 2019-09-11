import React from "react";
import "./App.css";
import Title from './Title';
import Image from './Image';

function App() {
  return (
    <>
      <Title title={title}/>
      <Image url={imageUrl}/>
    </>
  );
}

export default App;
