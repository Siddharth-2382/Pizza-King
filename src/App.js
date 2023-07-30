import "./App.css";
import Background from "./components/Background";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Background />
      <Featured />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
