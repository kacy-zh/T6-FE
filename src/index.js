import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { Chat } from "./Chat";

/**
 * Setting primary theme color
 */
const theme = createTheme({
  palette: {
    primary: {
      main: "#7500C0",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div className="App">
        <Chat />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
