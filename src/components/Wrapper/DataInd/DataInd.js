import React from "react";
import styles from "./DataInd.css";

export default function DataInd(props) {
  return (
    <div className="dataBlock">
      <div className="dataIndicator">
        <p className="dataTitle">{props.indicator}</p>
      </div>
    </div>
  );
}
