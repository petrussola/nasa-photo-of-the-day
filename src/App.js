import React, { useState } from "react";
import "./App.css";
import Title from './Title';
import Image from './Image';
import Date from './Date';
import Author from './Author';

function App() {

  const [title, setTitle] = useState("test");
  const [imageURL, setImageURL] = useState("test");
  const [date, setDate] = useState("test");
  const [author, setAuthor] = useState("test");

  return (
    <div>
      <Title titleState={title}/>
      <Image urlState={imageURL}/>
      <Date dateState={date} />
      <Author authorState={author} />
    </div>
  );
}

export default App;
