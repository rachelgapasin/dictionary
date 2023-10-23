import React, {useState} from "react";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyWord, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for "${keyWord}" definition`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h3>What word do you want to look up?</h3>
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
        <small>e.g. aquarium, code, matcha, recording</small>
      </section>
    </div>
  );
}
