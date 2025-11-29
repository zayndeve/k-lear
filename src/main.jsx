import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import Pricing from "./pages/Pricing.jsx";
import Interview from "./pages/Interview.jsx";
import Contact from "./pages/Contact.jsx";

import "./index.css";
import "./styles/App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
