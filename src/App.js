import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Title from './Title';
import Image from './Image';
import Date from './Date';
import Author from './Author';

function App() {

  const nasaAPI = 'https://lambda-github-api-server.herokuapp.com/';
  const test = "test";

  
  const [title, setTitle] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [date, setDate] = useState(null);
  const [author, setAuthor] = useState(null);
  
useEffect( () => {
  axios.get(nasaAPI)
    .then(resp => {
        setTitle(resp.data.title);
        setImageURL(resp.data.url);
        setDate(resp.data.date);
        setAuthor(resp.data.copyright);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally( res => {
        debugger
      })
}, [])


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
