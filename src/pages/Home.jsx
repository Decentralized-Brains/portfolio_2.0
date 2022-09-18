import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Team from "../components/Team";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
