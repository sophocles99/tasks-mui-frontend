import { createTheme } from "@mui/material";

const materialTheme = createTheme({
    palette: {
        primary: { main: "#415f91", contrastText: "#ffffff" },
        secondary: { main: "#FF4081", contrastText: "#FFFFFF" },
        error: { main: "#F44336" },
        background: { default: "#d6e3ff", paper: "#FFFFFF" },
        text: { primary: "#001b3e", secondary: "#757575" }
        // primary: { main: "#f0f2f4", contrastText: "#001B3E" },
        // secondary: { main: "#565E71" },
        // error: { main: "#BA1A1A" },
        // background: { default: "#415F91" },
    },
    components: {
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: "inherit",
                    "&.Mui-checked": {
                        color: "inherit",
                    },
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingLeft: 16,
                    paddingRight: 16,
                    "@media (min-width:600px)": {
                        paddingLeft: 16,
                        paddingRight: 16,
                    },
                },
            },
        },
    },
});

export default materialTheme;
