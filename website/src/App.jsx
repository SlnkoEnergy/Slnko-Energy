import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Kusum from "./Pages/Kusum Yojana/Kusum";
import Contact from "./Pages/Contacts/Contact";
import Careers from "./Pages/Careers/Careers";
// In your App.js or index.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Design from "./Pages/Services/Design&Engineering/D&E";
import SCM from "./Pages/Services/SCM/SCM";
import PMC from "./Pages/Services/PMC/PMC";


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
