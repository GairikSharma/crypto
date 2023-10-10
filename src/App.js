import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Coins from "./pages/Coins";
import CoinDetails from "./pages/CoinDetails";
import Error from "./pages/Error";
import { coinContext } from "./context";

function App() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("INR");
  // const [search, setSearch] = useState("")
  const [searchTerm, setSearchTerm] = useState("");

  

  return (
    <>
      <div className="App">
        <coinContext.Provider
          value={{ coins, setCoins, page, setPage, currency, setCurrency, searchTerm, setSearchTerm }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/coins" element={<Coins />}></Route>
            {/* <Route path="/coins/:id" element={<CoinDetails />}></Route> */}
            <Route path="/:id" element={<CoinDetails />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </coinContext.Provider>
      </div>
    </>
  );
}

export default App;
