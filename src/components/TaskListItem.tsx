import { CheckBoxOutlineBlank, CheckBoxOutlined } from "@mui/icons-material";
import { Checkbox, ListItem, ListItemText, useTheme } from "@mui/material";

interface Props {
    task: FullTask;
    onStatusChange: (id: string, newStatus: Status) => void;
}

const TaskListItem = ({ task, onStatusChange }: Props) => {
    const { id, title, status } = task;
    const theme = useTheme();

    const handleStatusClick = () => {
        const newStatus: Status = status === "done" ? "not done" : "done";
        console.log(newStatus);
        onStatusChange(id, newStatus);
    };

    return (
        <ListItem
            sx={{
                height: 56,
                borderRadius: 2,
                color: theme.palette.primary.contrastText,
                bgcolor: theme.palette.primary.main,
            }}
            secondaryAction={
                <Checkbox
                    edge="end"
                    onChange={handleStatusClick}
                    checked={status === "done"}
                    icon={<CheckBoxOutlineBlank />}
                    checkedIcon={<CheckBoxOutlined />}
                />
            }
        >
            <ListItemText sx={{ color: "inherit" }}>{title}</ListItemText>
        </ListItem>
    );
};

export default TaskListItem;
