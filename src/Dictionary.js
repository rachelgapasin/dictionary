import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [officialKeyword, setOfficialKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [images, setImages] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
    setLoaded(true);
  }

  function handleImagesResponse(response) {
    setImages(response.data.photos);
  }

  function search() {
    // API documentation: https://dictionaryapi.dev
    const apiDictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiDictionaryUrl).then(handleDictionaryResponse);

    // API documentation: https://www.shecodes.io/learn/apis/images
    const imagesApiKey = "d60fd2e148aef51f4643441eotf6b3fb";
    const imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;
    axios.get(imagesApiUrl).then(handleImagesResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setOfficialKeyword(keyword);
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary mt-4">
        <section>
          <h3>What word do you want to look up?</h3>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} />
          </form>
          <small>e.g. sunset, code, matcha, recording</small>
        </section>
        <Results results={results} images={images} keyword={officialKeyword} />
      </div>
    );
  } else {
    search();
    return (
      <div className="Dictionary mt-4">
        <section>
          <h3>What word do you want to look up?</h3>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} />
          </form>
          <small>e.g. sunset, code, matcha, recording</small>
        </section>
      </div>
    );
  }
}
