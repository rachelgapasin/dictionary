import Dictionary from "./Dictionary";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center">[Wordist] Dictionary</h1>
        <div className="wordist-definition mt-4">
          <h3>
            noun <span className="text-faded">• /wərdɪst/</span>
          </h3>
          <div>
            someone who is passionate about words, language, or vocabulary
          </div>
          <div className="text-faded text-secondary">Want to become a wordist? Start by entering a word below!</div>
        </div>
      </header>
      <main>
        <Dictionary defaultKeyword="cool"/>
      </main>
      <footer className="text-center">
        <a
          href="https://github.com/rachelgapasin/dictionary"
          target="_blank"
          rel="noreferrer"
          className="special-text"
        >
          Open-source code
        </a>{" "}
        by{" "}
        <a
          href="https://rachelgapasin.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="special-text"
        >
          Rachel Gapasin
        </a>{" "}
        👩🏽‍💻
      </footer>
    </div>
  );
}

export default App;
