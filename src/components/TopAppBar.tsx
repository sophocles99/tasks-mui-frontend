import { AccountCircle, Menu } from "@mui/icons-material";
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    useTheme,
} from "@mui/material";

interface Props {
    title: string;
}

const TopAppBar = ({ title }: Props) => {
    const theme = useTheme();

    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar
                variant="dense"
                disableGutters={true}
                sx={{
                    justifyContent: "space-between",
                    height: 64,
                    color: theme.palette.primary.main,
                }}
            >
                <IconButton size="small" sx={{ p: 0, color: "inherit" }}>
                    <Menu fontSize="medium"></Menu>
                </IconButton>
                <Typography
                    variant="body2"
                    sx={{
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                        fontSize: 24,
                        color: "inherit",
                    }}
                >
                    {title}
                </Typography>
                <IconButton size="small" sx={{ p: 0, color: "inherit" }}>
                    <AccountCircle fontSize="medium"></AccountCircle>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default TopAppBar;
