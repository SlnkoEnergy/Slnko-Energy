import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Footer from "./Components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./modules/home/pages/Home";
import About from "./modules/about/pages/About";
import Kusum from "./modules/kusum_yojana/pages/Kusum";
import Contact from "./modules/contact/pages/Contact";
import Careers from "./modules/careers/pages/Careers";
import Design from "./modules/services/design&engineering/pages/D&E";
import SCM from "./modules/services/scm/pages/SCM";
import PMC from "./modules/services/pmc/pages/PMC";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/design&Engineering" element={<Design />} />
          <Route path="/scm" element={<SCM />} />
          <Route path="/pmc" element={<PMC />} />
          <Route path="/pm-kusum-yojana" element={<Kusum />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        

      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
