import "./App.css";
import Header from "./components/layout/header";
import { Routes, Route } from "react-router-dom";
import MainPage from "../src/pages/MainPage";
import BasketPage from "../src/pages/BasketPage";
import ContactsPage from "../src/pages/contacts/index";
import Footer from "./components/layout/footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
