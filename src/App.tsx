import { Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { getTasks, patchTask } from "./api";
import "./App.css";
import StatusBar from "./components/StatusBar";
import TaskList from "./components/TaskList";
import TopAppBar from "./components/TopAppBar";

function App() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [tasks, setTasks] = useState<FullTask[]>([]);
    const theme = useTheme();

    useEffect(() => {
        const populateTasks = async () => {
            try {
                const data = await getTasks();
                setTasks(data);
                setErrorMessage(null);
            } catch (error) {
                setErrorMessage(
                    "Unable to load tasks. Please check your internet connection."
                );
            } finally {
                setLoading(false);
            }
        };
        populateTasks();
    }, []);

    const handleStatusChange = async (id: string, newStatus: Status) => {
        const oldTasks = [...tasks];
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, status: newStatus } : task
            )
        );
        try {
            await patchTask(id, { status: newStatus });
            setErrorMessage(null);
        } catch (error) {
            setTasks(oldTasks);
            setErrorMessage(
                "Unable to update task. Please check your internet connection."
            );
        }
    };

    return (
        <div className="app">
            <Container
                sx={{
                    height: "100%",
                    bgcolor: theme.palette.background.default,
                }}
            >
                <StatusBar time="9:30" />
                <TopAppBar title="Tasks" />
                <TaskList tasks={tasks} onStatusChange={handleStatusChange} />
            </Container>
        </div>
    );
}

export default App;
