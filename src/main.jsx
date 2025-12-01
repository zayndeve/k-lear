import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import TopikGKS from "./pages/TopikGKS.jsx";
import Interview from "./pages/Interview.jsx";
import Contact from "./pages/Contact.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Topik1 from "./pages/Topik1.jsx";
import Topik2 from "./pages/Topik2.jsx";
import Speaking from "./pages/Speaking.jsx";

import "./index.css";
import "./styles/App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/topik1" element={<Topik1 />} />
      <Route path="/dashboard/topik2" element={<Topik2 />} />
      <Route path="/dashboard/speaking" element={<Speaking />} />
      <Route path="/topik-gks" element={<TopikGKS />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
