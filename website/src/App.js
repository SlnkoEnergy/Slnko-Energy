import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Kusum from "./Pages/Kusum Yojana/Kusum";
import Contact from "./Pages/Contacts/Contact";
import Careers from "./Pages/Careers/Careers";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pm-kusum-yojana" element={<Kusum />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        <Footer /> 

      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
