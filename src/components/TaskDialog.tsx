import { CheckBoxOutlineBlank, CheckBoxOutlined } from "@mui/icons-material";
import {
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    TextField,
    useTheme,
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
    const theme = useTheme();
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
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            PaperProps={{
                style: {
                    backgroundColor: theme.palette.background.default,
                },
            }}
            sx={{
                "& .MuiDialog-paper": {
                    maxWidth: "344px",
                    margin: "0 auto",
                },
            }}
        >
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
                            <Checkbox
                                name="status"
                                checked={currentTask.status === "done"}
                                onChange={handleChange}
                                icon={<CheckBoxOutlineBlank />}
                                checkedIcon={<CheckBoxOutlined />}
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
