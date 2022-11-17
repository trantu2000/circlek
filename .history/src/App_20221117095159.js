import "./App.css";
import Header from "./components/Header";
import Drinks from "./Pages/Drinks";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Header />
        <Route path="/" element={<Home />} />
        <Route path="drinks" element={<Drinks />} />
        <Drinks />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
