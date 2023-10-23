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
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange}/>
      </form>
    </div>
  );
}
