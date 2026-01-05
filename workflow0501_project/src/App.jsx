import "./App.css";
import Header from "./components/layout/header";
import { Routes, Route } from "react-router-dom";
import MainPage from "../src/pages/MainPage";
import BasketPage from "../src/pages/BasketPage";
import ContactsPage from "../src/pages/ContactsPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  );
}

export default App;
