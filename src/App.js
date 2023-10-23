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
      <footer className="text-center">Coded by Rachel Gapasin 👩🏽‍💻</footer>
    </div>
  );
}

export default App;
