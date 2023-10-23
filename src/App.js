import Dictionary from "./Dictionary";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center">[Wordist] Dictionary</h1>
        <h3>noun</h3>
        <p>Someone who is passionate about words, language, or vocabulary</p>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center mt-3">Coded by Rachel Gapasin 👩🏽‍💻</footer>
    </div>
  );
}

export default App;
