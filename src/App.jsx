import "./App.css";
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <HeroSection />
      </BrowserRouter>

    </div>
  );
};

export default App;
