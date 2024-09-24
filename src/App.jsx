import "./App.css";
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies.jsx";
import Main from "./pages/Main.jsx";
import Price from "./pages/Price.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </div>
  );
}
