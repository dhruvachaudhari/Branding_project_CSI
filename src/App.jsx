// import "./App.css";
// import HeroSection from "./components/Hero";
// import Navigation from "./components/Navigation";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Contact from "./components/Contact";
// // import HeroSection from "./components/Hero";
// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navigation />
//         <Routes>
//           <Route path='/' element={< HeroSection />} />
//           <Route path='/contacts' element={<Contact />} />
//         </Routes>
//         <HeroSection />

//       </BrowserRouter>

//     </div>
//   );
// };

// export default App;

import "./App.css";
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
