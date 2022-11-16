import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Box sx={{ height: 10, backgroundColor: "yellow" }}></Box>
    </div>
  );
}

export default App;
