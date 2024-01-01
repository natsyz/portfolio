import "./css/home.css";
import { Banner } from "../components/Banner";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Gallery } from "../components/Gallery";

export const Home = () => {
  return (
    <section>
      <Banner/>
      <About/>
      <Projects/>
      <Gallery/>
    </section>
  )
}
