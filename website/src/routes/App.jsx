import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "../modules/home/pages/Home";
import About from "../modules/about/pages/About";
import Kusum from "../modules/kusum_yojana/pages/Kusum";
import Contact from "../modules/contact/pages/Contact";
import Careers from "../modules/careers/pages/Careers";
import Design from "../modules/services/design&engineering/pages/D&E";
import SCM from "../modules/services/scm/pages/SCM";
import PMC from "../modules/services/pmc/pages/PMC";
import Layout from "./Outlet";
import News from "../modules/media/news/pages/News.jsx";

// ^ adjust path as needed

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pm-kusum-yojana" element={<Kusum />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          
          {/* Nested Services Routes */}
          <Route path="/services" element={<Layout />}>
            <Route path="design&engineering" element={<Design />} />
            <Route path="scm" element={<SCM />} />
            <Route path="pmc" element={<PMC />} />
          </Route>

          <Route path='/media' element={<Layout />}>
          <Route path="news" element={<News />} />
          </Route>
        </Routes>
    </ThemeProvider>
  );
};

export default App;
