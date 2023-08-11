import { useState } from "react";
import Landing from "./pages/landing";
import "./style/App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/home" element={<Landing />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
