import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "./config/theme/theme";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Simulation-Queuing_System">
      <ThemeProvider theme={lightTheme}>
        <CssBaseline enableColorScheme />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
