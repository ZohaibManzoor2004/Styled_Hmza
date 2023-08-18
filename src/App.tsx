import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppProvider from "./context/AppContext";
import CustomDistributions from "./components/CustomDistributions/CustomDistributions";
import ChiSquare from "./components/ChiSquare/ChiSquare";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom" element={<CustomDistributions />} />
        <Route path="/chi-square" element={<ChiSquare />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
