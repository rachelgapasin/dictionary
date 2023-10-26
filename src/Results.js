import React from "react";

import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import Images from "./Images";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2 className="mb-3">{props.results.word}</h2>
          {props.results.phonetics.map((phonetic, index) => {
            return (
              <p index={index}>
                <Phonetic phonetic={phonetic} />
              </p>
            );
          })}
        </section>
        {props.results.meanings.map((meaning, index) => {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
        <Images images={props.images} alt={props.keyword} />
      </div>
    );
  } else {
    return (
      <section className="Results">
        <div className="text-center">
          Sorry, we couldn't find the definition of "{props.keyword}" for you.
          😔 Please, feel free to search for another word though!
        </div>
      </section>
    );
  }
}
