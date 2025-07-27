import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Favourites from "./pages/Favourites";
import { useState } from "react";


function App() {
    const [page, setPage] = useState("home");
  return (
    <div className="app">
       <NavBar onNavigate={setPage} />
      {page === "home" && <Home />}
      {page === "favourites" && <Favourites />}
    </div>
  );
}

export default App;
