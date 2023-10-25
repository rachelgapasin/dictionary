import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";
import Images from "./Images";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [images, setImages] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  function handleDictionaryResponse(response) {
    if (response.data[0].title === "No Definitions Found") {
      setError(true);
      return;
    }
    setResults(response.data[0]);
  }

  function handleImagesResponse(response) {
    setImages(response.data.photos);
  }

  function search() {
    // API documentation: https://dictionaryapi.dev
    const apiDictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiDictionaryUrl).then(handleDictionaryResponse);

    const imagesApiKey = "d60fd2e148aef51f4643441eotf6b3fb";
    const imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;
    axios.get(imagesApiUrl).then(handleImagesResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded && !error) {
    return (
      <div className="Dictionary mt-4">
        <section>
          <h3>What word do you want to look up?</h3>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} />
          </form>
          <small>e.g. sunset, code, matcha, recording</small>
        </section>
        <Results results={results} />
        <Images images={images} alt={keyword} />
      </div>
    );
  } else if (loaded && error) {
    return (
      <div className="Dictionary mt-4">
        <section>
          <h3>What word do you want to look up?</h3>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} />
          </form>
          <small>e.g. sunset, code, matcha, recording</small>
        </section>
        <section>
          <h3>
            Sorry, we couldn't find the definition of "{keyword}" for you 😔
            Please, feel free to search for another word though!
          </h3>
        </section>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
