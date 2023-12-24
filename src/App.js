import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";

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
      <NavBar/>
      <Banner/>
      <About/>
      <Projects/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
