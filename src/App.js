import "./App.css";
import Background from "./components/Background";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Background />
      <Featured />
    </>
  );
}

export default App;
