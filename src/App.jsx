import { AboutMe } from "./components/about/AboutMe";
import { Hero } from "./components/hero/Hero";
import { NavBar } from "./components/nav-bar/NavBar";
import { Paralax } from "./components/paralax/Paralax";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Services } from "./components/services/Services";
import { Cursor } from "./cursor/Cursor";

const App = () => {
  return <div>
    <Cursor />
    <section id="Homepage">
      <NavBar />
      <Hero />
    </section>
    <section id="About"><AboutMe /> </section>
    <section ><Paralax type="services" /> </section>
    <section id="Services">
      <Services />
    </section>
    <section id="Portfolio">
      <Portfolio type="portfolio" />
    </section>
    <section id="Contacts">Contact</section>
  </div>;
};

export default App;
