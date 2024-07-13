import { createTheme } from "@mui/material";

const materialTheme = createTheme({
    palette: {
        primary: { main: "#F9F9FF", contrastText: "#001B3E" },
        secondary: { main: "#565E71" },
        error: { main: "#BA1A1A" },
        background: { default: "#415F91" },
    },
    components: {
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
