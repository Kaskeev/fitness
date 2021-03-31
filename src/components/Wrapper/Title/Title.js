import React, { Component } from "react";
import styled from "../Title/Title.css";

export default function Title(props) {
  return (

    <div className="titleBlock">
      <h3 className="title">{props.title}</h3>
    </div>
    
  );
}
