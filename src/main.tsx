import { THEME_ID, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import materialTheme from "./material-theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={{ [THEME_ID]: materialTheme }}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
