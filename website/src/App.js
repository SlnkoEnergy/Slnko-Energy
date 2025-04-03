import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles"; // Ensure correct import
import theme from "./theme";
import Footer from "./Components/Footer";
import Page2 from "./Pages/Page2";
<<<<<<< HEAD
import Page3 from "./Pages/Page3";
=======
import Page4 from "./Pages/Page4"; // Import your Page4 component
import Page5 from "./Pages/Page5"; // Import your Page5 component
>>>>>>> origin/main

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* <Navbar /> */}
<<<<<<< HEAD
        {/* <Page2 />
        <Page3 />        
        <Footer /> */}
=======
        {/* <Page2 /> */}
        {/* <Page4/> */}
        {/* <Footer /> */}
        <Page5/>
>>>>>>> origin/main

      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
