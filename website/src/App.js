import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Home from "./Pages/Home/Home.js";
import About from "./Pages/About/About.js";
import Services from "./Pages/Services/Services.js";
import Kusum from "./Pages/Kusum Yojana/Kusum.js";
import Careers from "./Pages/Careers/Careers.js";
import Contact from "./Pages/Contacts/Contact.js";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pm-kusum-yojana" element={<Kusum />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
