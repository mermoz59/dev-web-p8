import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Footer, Hero, Navbar, Tech, Works } from "./components";
import NavBarMobile from "./components/NavBarMobile";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <NavBarMobile />
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;