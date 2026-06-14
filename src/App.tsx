import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar";
import Catalog from "./components/catalog/Catalog";
import Collection from "./components/collection/Collection";
import GameDetails from "./components/game/GameDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/game/1" element={<GameDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
