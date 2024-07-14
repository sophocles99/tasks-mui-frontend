import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    Switch,
    TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

interface Props {
    open: boolean;
    onClose: () => void;
    onSave: (task: FullTask | NewTask, mode: TaskDialogMode) => void;
    task: FullTask | null;
    mode: TaskDialogMode;
}

const TaskDialog = ({ open, onClose, onSave, task = null, mode }: Props) => {
    const [currentTask, setCurrentTask] = useState<NewTask | FullTask>({
        title: "",
        description: "",
    });

    useEffect(() => {
        if (task) {
            setCurrentTask(task);
        }
    }, [task]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;
        setCurrentTask((prevTask) => ({
            ...prevTask,
            [name]: name === "status" ? (checked ? "done" : "not done") : value,
        }));
    };

    const handleSave = () => {
        onSave(currentTask, mode);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>
                {mode === "add" ? "New Task" : "Edit Task"}
            </DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    name="title"
                    label="Title"
                    type="text"
                    fullWidth
                    value={currentTask.title}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="description"
                    label="Description"
                    type="text"
                    fullWidth
                    multiline
                    rows={4}
                    value={currentTask.description}
                    onChange={handleChange}
                />
                {mode === "edit" && "status" in currentTask && (
                    <FormControlLabel
                        control={
                            <Switch
                                name="status"
                                checked={currentTask.status === "done"}
                                onChange={handleChange}
                            />
                        }
                        label="Done"
                    />
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button
                    onClick={handleSave}
                    variant="contained"
                    color="primary"
                >
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default TaskDialog;
