import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles"; // Ensure correct import
import theme from "./theme";
import Footer from "./Components/Footer";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4"; // Import your Page4 component
import Page5 from "./Pages/Page5"; // Import your Page5 component
import Page1 from "./Pages/Page1";
import Page7 from "./Pages/Page7";

// import Page7N from "./Pages/Page7.0";

import Page4 from "./Pages/Page4"; // Import your Page4 component
import Page5 from "./Pages/Page5"; // Import your Page5 component


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* <Navbar /> */}

        <Page1 />
        <Page2 />
        <Page3 />
        {/* <Page4/>   */}
        <Page5/>
        <Page6/>
        <Page7/>       
       
        <Footer />

        {/* <Page2 /> */}

        

        <Page4/>

        {/* <Footer /> */}

        
        {/* <Page7N/> */}




      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
