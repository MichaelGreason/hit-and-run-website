import { useState } from "react";
import Landing from "./pages/landing";
import "./style/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
