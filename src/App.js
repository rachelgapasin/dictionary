import Dictionary from "./Dictionary";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center">[Wordist] Dictionary</h1>
        <h3 className="mt-4">noun</h3>
        <p>someone who is passionate about words, language, or vocabulary</p>
      </header>
      <main>
        <Dictionary />
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
