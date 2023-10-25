import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  function play() {
    new Audio(props.phonetic.audio).play();
  }
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <button onClick={play}>
          <i class="fa-solid fa-volume-high playable"></i>
        </button>
        <span>{props.phonetic.text}</span>
      </div>
    );
  } else {
    return (
      <div className="Phonetic">
        <i class="fa-solid fa-volume-high"></i>
        <span>{props.phonetic.text}</span>
      </div>
    );
  }
}
