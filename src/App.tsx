import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar";
import Catalog from "./components/catalog/Catalog";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
