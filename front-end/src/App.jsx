import { useState } from "react";
import Landing from "./pages/landing";
import "./style/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Listen from "./pages/listen";
import Photos from "./pages/photos";
import Reviews from "./pages/reviews";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/listen" element={<Listen />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
