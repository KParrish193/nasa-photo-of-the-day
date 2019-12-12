import React from "react";
import "./../App.css";

const Photo = props => {
    console.log(props);
    return (
      
      <div className="photo-card">
        <h2>{props.title}</h2>
        <p>Date: {props.date} </p>
        <div className="image">
        <img src={props.image} alt="space"/>
        </div>
        <p>{props.explanation}</p>
        
      </div>
    );
  };

  export default Photo;