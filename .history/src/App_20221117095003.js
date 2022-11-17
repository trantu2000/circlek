import "./App.css";
import Header from "./components/Header";
import Drinks from "./Pages/Drinks";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Drinks/>
    </>
  );
}

export default App;
