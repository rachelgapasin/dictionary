import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // API documentation: https://dictionaryapi.dev
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary mt-4">
      <section>
        <h3>What word do you want to look up?</h3>
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
        <small>e.g. sunset, code, matcha, recording</small>
      </section>
      <section>
        <Results results={results} />
      </section>
    </div>
  );
}
