import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Footer from "./Components/Footer";

import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page7 from "./Pages/Page7";

import MadhyaPradeshMap from "./Pages/Map";
import Rajasthan from "./Pages/Rajasthan";
import India from "./Pages/India";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* Navbar stays here if it's common across pages */}
        {/* <Navbar /> */}

        <Routes>
          {/* Home or landing route (contains multiple sections) */}
          <Route
            path="/"
            element={
              <>
                <Page1 />
                <Page2 />
                <Page3 />
                <Page4 />
                <Page5 />
                <India />
                <Page7 />
                <Footer />
              </>
            }
          />

          {/* State-specific maps */}
          <Route path="/map/madhya-pradesh" element={<MadhyaPradeshMap />} />
          <Route path="/map/rajasthan" element={<Rajasthan />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
