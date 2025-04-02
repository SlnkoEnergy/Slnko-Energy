import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles"; // Ensure correct import
import theme from "./theme";
import Footer from "./Components/Footer";
import Page2 from "./Pages/Page2";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Page2 />
        {/* <Footer /> */}

      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
