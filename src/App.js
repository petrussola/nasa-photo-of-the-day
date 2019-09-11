import React, { useState } from "react";
import axios from 'axios';
import "./App.css";
import Title from './Title';
import Image from './Image';
import Date from './Date';
import Author from './Author';

function App() {

  const nasaAPI = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
  const test = "test";

  
  const [title, setTitle] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [date, setDate] = useState(null);
  const [author, setAuthor] = useState(null);
  
  axios.get(nasaAPI)
    .then(resp => {
        setTitle(resp.data.title);
        setImageURL(resp.data.url);
        setDate(resp.data.date);
        setAuthor(resp.data.copyright);
        debugger
    })
    .catch(error => {
      console.log(error.message);
    })

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
