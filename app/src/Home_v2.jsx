import About from "./v2_components/About";
import Features from "./v2_components/Features";
import Footer from "./v2_components/Footer";
import Hero from "./v2_components/Hero";
import HowItWorks from "./v2_components/HIW";
import Investors from "./v2_components/Investors";
import Navbar from "./v2_components/Navbar"
import Partner from "./v2_components/Partner";
import Team from "./v2_components/Team";

// Import sections as you create them
// import Hero from "../components/Hero";
// import About from "../components/About";
// import Stats from "../components/Stats";
// import Swipe from "../components/Swipe";
// import Features from "../components/Features";
// import Team from "../components/Team";
// import Quote from "../components/Quote";
// import Partner from "../components/Partner";
// import Investors from "../components/Investors";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";

export default function Home_V2() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      {/* <Stats /> */}
        <HowItWorks/>
      {/* <Swipe /> */}

      <Features />

      <Team />

      {/* <Quote /> */}

      <Partner />

      <Investors />

      {/* <Contact /> */}

      <Footer />
    </>
  );
}