import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Chat } from "./Chat";
import hover from "./hover.png";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";

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
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="Hover">
          <MenuIcon fontSize="large" />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Private Cloud Knowledgebase"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Public Internet Knowledgebase"
            />
          </FormGroup>
        </div>
        <Chat />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
