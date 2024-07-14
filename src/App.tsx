import { Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { getTasks, patchTask } from "./api";
import "./App.css";
import StatusBar from "./components/StatusBar";
import TaskDialog from "./components/TaskDialog";
import TaskList from "./components/TaskList";
import TopAppBar from "./components/TopAppBar";

function App() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [tasks, setTasks] = useState<FullTask[]>([]);
    const [taskDialogOpen, setTaskDialogOpen] = useState(false);
    const [taskDialogTask, setTaskDialogTask] = useState<FullTask | null>(null);
    const [taskDialogMode, setTaskDialogMode] = useState<TaskDialogMode>("add");
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

    const handleOpenTaskDialog = (task: FullTask | null = null) => {
        if (task) {
            setTaskDialogTask(task);
            setTaskDialogMode("edit");
        } else {
            setTaskDialogTask(null);
            setTaskDialogMode("add");
        }
        setTaskDialogOpen(true);
    };

    const handleSaveTask = (task: NewTask | FullTask) => {
        console.log("Saving task:", task);
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
                <TaskList
                    tasks={tasks}
                    onStatusChange={handleStatusChange}
                    onOpenTaskDialog={handleOpenTaskDialog}
                />
                <TaskDialog
                    open={taskDialogOpen}
                    onClose={() => setTaskDialogOpen(false)}
                    onSave={handleSaveTask}
                    task={taskDialogTask}
                    mode={taskDialogMode}
                />
            </Container>
        </div>
    );
}

export default App;
