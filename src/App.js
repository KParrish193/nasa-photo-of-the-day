import React, {useState, useEffect} from "react";
import Photo from "./Components/Photo";
import axios from "axios";
import "./App.css";

import {Button, InputGroup, InputGroupAddon, Input} from 'reactstrap';


function App(){

  const [photoData, setPhotoData] = useState({});
  const [date, setDate] = useState({});

    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=rLpVkzWLLfhepK1qkqpWYw7hsj8x1wNk73mHUmGH`)
        .then(response => {
          console.log(response.data)
          setPhotoData(response.data);
        })
        .catch(error => {
        console.log("The data was not returned, error");
        });
      }, []); 

  return (
    <div className="appContainer">
          <div className="heading">
            <div className ="logo">
              <img src="../nasalogo.png" alt="nasa logo"></img>
            </div>
            <h1>Astronomy Photo of the Day</h1>
              <div className="buttons">
              <Button onClick={() => setDate(date + 1)}>&#10094;  Next Day {}</Button> 
              <Button onClick={() => setDate(date)}>Today:  {photoData.date}</Button>
              <Button onClick={() => setDate(date - 1)}> Previous Day &#10095;</Button>
            </div>
            </div>


        <div className="photocard">
            <Photo
            title={photoData.title}
            date={photoData.date}
            image={photoData.hdurl} 
            photog={photoData.copyright}
            explanation={photoData.explanation} />
        </div>
    </div>
  );
};

export default App;