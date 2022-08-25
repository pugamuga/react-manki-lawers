import BackToTopBtn from "./components/BackToTopBtn";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Skills from "./components/Skills";
import Team from "./components/Team";
import Testimotionals from "./components/Testimotionals";
import React, { useState } from "react";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Banner firstState={isOpen} secondState={setIsOpen}/>
      <Testimotionals/>
      <Skills/>
      <Team/>
      <Newsletter/>
      <Contact/>
      <Footer/>
      <BackToTopBtn firstState={isOpen} secondState={setIsOpen}/>
    </div>
  );
}

export default App;
