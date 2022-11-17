import "./App.css";
import Header from "./components/Header";
import Drinks from "./Pages/Drinks";
import Home from "./Pages/Home";
import { Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Foods from "./Pages/Foods";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/drinks" element={<Foods />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
