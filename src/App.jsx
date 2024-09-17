import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Catalog from "./pages/Catalog/Catalog";
import Product from "./pages/Product/Product";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<Product />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
