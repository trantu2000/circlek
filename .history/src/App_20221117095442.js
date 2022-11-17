import "./App.css";
import Header from "./components/Header";
import Drinks from "./Pages/Drinks";
import Home from "./Pages/Home";
import {  Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Header />
      <Route path="/" element={<Home />} />
      <Route path="/drinks" element={<Drinks />} />
    </Routes>
  );
}

export default App;
