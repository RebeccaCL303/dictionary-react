import "./App.css";
import Search from "./Search.js";

function App() {
 return (
  <div className="App">
   <main>
    <h1>Dictionary</h1>
    <Search />
   </main>
   <footer>
    {" "}
    <a
     href="https://github.com/BEX-0/dictionary-react"
     target="_blank"
     rel="noreferrer"
    >
     Open Source Code
    </a>{" "}
    by Rebecca Leibowitz
   </footer>
  </div>
 );
}

export default App;
