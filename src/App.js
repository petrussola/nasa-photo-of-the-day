import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from './Header';
import Image from './Image';
import Content from './Content';
import styled from 'styled-components';

function App() {

  
  // STATES
  
  const [titleState, setTitle] = useState(null);
  const [imageState, setImageURL] = useState(null);
  const [dateState, setDate] = useState(null);
  const [authorState, setAuthor] = useState(null);
  const [descriptionState, setDescription] = useState(null);
  
  // DATE STATE
  const today = new Date();
  const dd = ('0' + today.getDate()).slice(-2);
  const mm = ('0' + (today.getMonth() + 1)).slice(-2);
  const yyyy = today.getFullYear();
  const dateToday = yyyy + '-' + mm + '-' + dd;
  const [currDate, setDateForm] = useState(dateToday);
  
  const setDateSelector = (e) => {
    return setDateForm(e.target.value);
  }
  
  const nasaAPI = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${currDate}`;
  const test = "test";

useEffect( () => {
  axios.get(nasaAPI)
    .then(resp => {
        setTitle(resp.data.title);
        setImageURL(resp.data.url);
        setDate(resp.data.date);
        setAuthor(resp.data.copyright);
        setDescription(resp.data.explanation);
        console.log(nasaAPI);
      })
      .catch(error => {
        console.log(error.message);
      })
}, [currDate])

// handling form data



// styled components

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
      <Header title={titleState} date={currDate} setDate={setDateSelector} />
      <Image imageURL={imageState}/>
      <Content date={dateState} author={authorState} description={descriptionState}/>
    </StyledDiv>
  );
}

export default App;
