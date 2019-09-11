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

  // STATES

  const [title, setTitle] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [date, setDate] = useState(null);
  const [author, setAuthor] = useState(null);
  const [currDate, setDateForm] = useState();
  
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
}, [])

// handling form data


function handleChange(e) {
  console.log(e.target)
}
function handleSubmit(e) {
  console.log(e.target)
}


  return (
    <div>
      <form>
        <input type='date' value="2019-11-09" onChange={ e => setDate(e.target.value)} />
      </form>
      <Title titleState={title}/>
      <Image urlState={imageURL}/>
      <Date dateState={date} />
      <Author authorState={author} />
    </div>
  );
}

export default App;
