import { createTheme } from "@mui/material";

const materialTheme = createTheme({
    palette: {
        primary: { main: "#415F91" },
        secondary: { main: "#565E71" },
        error: { main: "#BA1A1A" },
        background: { default: "#F9F9FF" },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingLeft: 16,
                    paddingRight: 16,
                    "@media (min-width:600px)": {
                        paddingLeft: "24px",
                        paddingRight: "24px",
                    },
                },
            },
        },
    },
});

export default materialTheme;
