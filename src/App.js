import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Connection from "./pages/Connection";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/bemutatkozas" element={<Introduction />}></Route>
        <Route exact path="/kapcsolat" element={<Connection />}></Route>
      </Routes>
    </div>
  );
}

export default App;
