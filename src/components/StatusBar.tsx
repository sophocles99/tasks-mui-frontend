import {
    BatteryFull,
    SignalCellular4Bar,
    SignalWifi2Bar,
} from "@mui/icons-material";
import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography,
    useTheme,
} from "@mui/material";

interface StatusBarProps {
    time: string;
}

const StatusBar = ({ time }: StatusBarProps) => {
    const theme = useTheme();

    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar
                variant="dense"
                disableGutters={true}
                sx={{
                    justifyContent: "space-between",
                    px: "8px",
                    height: 52,
                    color: theme.palette.primary.main,
                }}
            >
                <Typography
                    variant="caption"
                    sx={{
                        color: "inherit",
                    }}
                >
                    {time}
                </Typography>
                <Box
                    sx={{
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 24,
                        height: 24,
                        bgcolor: theme.palette.primary.main,
                        borderRadius: "50%",
                    }}
                />
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "inherit",
                    }}
                >
                    <IconButton size="small" sx={{ p: 0, color: "inherit" }}>
                        <SignalWifi2Bar fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ p: 0, color: "inherit" }}>
                        <SignalCellular4Bar fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ p: 0, color: "inherit" }}>
                        <BatteryFull fontSize="small" />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default StatusBar;
