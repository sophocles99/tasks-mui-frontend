import { AppBar, IconButton, Toolbar, useTheme } from "@mui/material";
import { Menu } from "@mui/icons-material";

const TopAppBar = () => {
    const theme = useTheme();

    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar
                variant="dense"
                disableGutters={true}
                sx={{
                    justifyContent: "space-between",
                    height: 52,
                    color: theme.palette.background.default,
                }}
            >
                <IconButton>
                    <Menu></Menu>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default TopAppBar;
