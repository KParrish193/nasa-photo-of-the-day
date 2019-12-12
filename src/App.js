import React, {useState, useEffect} from "react";
import Photo from "./Components/Photo";
import axios from "axios";
import "./App.css";

function App() {

  const [photoData, setPhotoData] = useState([]);

    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=rLpVkzWLLfhepK1qkqpWYw7hsj8x1wNk73mHUmGH`)
        .then(response => {
          console.log(response.data)
          setPhotoData([response.data]);
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
          </div>

        <div className="photocard">
          {photoData.map((item, index) => {
            return <Photo key={index} 
            title={item.title}
            date={item.date}
            explanation={item.explanation}
            image={item.hdurl} />
          })}
        </div>

    </div>
  );
};

export default App;