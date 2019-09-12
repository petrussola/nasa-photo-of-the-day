import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from './Header';
import Image from './Image';
import Content from './Content';
import styled from 'styled-components';

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

  function handleChange(e){
    console.log(e);
    console.log(document.getElementById('form').value);
    console.log(currDate);
    setDateForm(document.getElementById('form').value);
    console.log(currDate);
    console.log('https://lambda-github-api-server.herokuapp.com/' + currDate)
  }

  const StyledDiv = styled.div`
    width: 65%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media (max-width: 500px) {
    width: 100%;
    padding: 0 1rem;
  }

    h1 {
      font-size: 2.5rem;
      font-weight: bold;
      letter-spacing: .1rem;
      @media (max-width: 500px) {
        font-size: 1.5rem;
      }
    }
    p {
      font-size: 1rem;
      line-height: 1.6; 
      @media (max-width: 500px) {
        line-height: 2;
      } 
    }
    a {
      text-decoration: none;
      color: inherit;
      border-bottom: 2px dotted #CCCCCC;
    }
  `;

  return (
    <StyledDiv className='container'>
      {/* <form>
        <input type='date' value="2019-11-09" onChange={ e => setDate(e.target.value)} />
      </form> */}
      <form onSubmit={(e) => setDateForm(onSubmit(e))} onChange={handleChange}>
        {/* <label>
          Add your date 
          <input type='text' id='date'/>
          <input type='submit'  />
        </label> */}
        Add your date 
        <select id='form'>
          <option>2019-09-10</option>
          <option>2019-08-28</option>
        </select>
      </form>
      <Header title={titleState}/>
      <Image imageURL={imageState}/>
      <Content date={dateState} author={authorState} description={descriptionState}/>
    </StyledDiv>
  );
}

export default App;
