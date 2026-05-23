import React from "react";
import Card from "./components/Card";
import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage"
import Dashboard from "./components/Dashboard";
function App() {
  console.log("\n\t React is rendering check : ✅ " );
  return <>
  <BrowserRouter>
  <Routes>
  <Route path="/home"  element={<Home/>}  />
  <Route path="/"  element={<LandingPage/>}  />
  <Route path="/dashboard"  element={<Dashboard/>}  />

  </Routes>
  </BrowserRouter>
  
  </>;
}

export default App;
