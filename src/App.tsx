import { Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "./App.css";
import StatusBar from "./components/StatusBar";
import TopAppBar from "./components/TopAppBar";

function App() {
    const theme = useTheme();
    return (
        <div className="app">
            <Container sx={{ bgcolor: theme.palette.primary.main }}>
                <StatusBar time="9:30" />
                <TopAppBar />
            </Container>
        </div>
    );
}

export default App;
