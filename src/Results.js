import React from "react";

import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

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
      </div>
    );
  } else {
    return (
      <section>
        <div>Cannot find the definition to this word :(</div>
      </section>
    );
  }
}
