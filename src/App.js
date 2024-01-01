import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, []);

  if (loading) {
    return (
      <div style={{backgroundColor:"white", height:"200px"}}></div>
    )
  }

  return (
    <div className="App">
      <BrowserRouter basename="/portfolio">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="mahoni-smart-city" element={<Project/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
