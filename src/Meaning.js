import React from "react";

import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="mb-4">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <div className="row">
              <div className="col-1">
                <div className="definition">{index + 1}.</div>
              </div>
              <div className="col">
                <div className="definition">{definition.definition}</div>
                <div className="example">{definition.example}</div>
                <Synonyms synonyms={definition.synonyms} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
