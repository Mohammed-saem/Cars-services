import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import Gallary from "./Gallary";
import GallaryDetails from "./GallaryDetails";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallary" element={<Gallary />} />

        <Route
          path="/gallery/:id"
          element={<GallaryDetails />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;