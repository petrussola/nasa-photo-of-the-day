import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from './Header';
import Image from './Image';
import Content from './Content';

function App() {

  const nasaAPI = 'https://lambda-github-api-server.herokuapp.com/';
  const test = "test";

  // STATES

  const [titleState, setTitle] = useState(null);
  const [imageState, setImageURL] = useState(null);
  const [dateState, setDate] = useState(null);
  const [authorState, setAuthor] = useState(null);
  const [descriptionState, setDescription] = useState(null);
  const [currDate, setDateForm] = useState('yayaya');
  
useEffect( () => {
  axios.get(nasaAPI)
    .then(resp => {
        setTitle(resp.data.title);
        setImageURL(resp.data.url);
        setDate(resp.data.date);
        setAuthor(resp.data.copyright);
        setDescription(resp.data.explanation);
      })
      .catch(error => {
        console.log(error.message);
      })
}, [])

// handling form data


// function handleChange(e) {
//   console.log(e.target)
// }
// function handleSubmit(e) {
//   console.log(e.target)
// }
  function onSubmit(e){
    e.preventDefault();
    const dateInput = document.getElementById('date');
    // console.log(currDate);
    // console.log(dateInput.value);
    // setDateForm(dateInput.value);
    // console.log(currDate);
    return dateInput.value;
  }

  return (
    <div className='container'>
      {/* <form>
        <input type='date' value="2019-11-09" onChange={ e => setDate(e.target.value)} />
      </form> */}
      <form onSubmit={(e) => setDateForm(onSubmit(e))}>
        <label>
          Add your date 
          <input type='text' id='date'/>
          <input type='submit'  />
        </label>
      </form>
      <Header title={titleState}/>
      <Image imageURL={imageState}/>
      <Content date={dateState} author={authorState} description={descriptionState}/>
    </div>
  );
}

export default App;
