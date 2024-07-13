import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
    CheckBoxOutlineBlankOutlined,
    CheckBoxOutlined,
} from "@mui/icons-material";

interface Props {
    task: FullTask;
    onStatusChange: (id: string, newStatus: Status) => void;
}

const TaskListItem = ({ task, onStatusChange }: Props) => {
    const { id, title, status } = task;

    const handleStatusClick = () => {
        const newStatus: Status = status === "done" ? "not done" : "done";
        onStatusChange(id, newStatus);
    };

    return (
        <>
            <ListItem onClick={handleStatusClick}>
                <ListItemText>{title}</ListItemText>
                <ListItemIcon>
                    {status === "done" ? (
                        <CheckBoxOutlined />
                    ) : (
                        <CheckBoxOutlineBlankOutlined />
                    )}
                </ListItemIcon>
            </ListItem>
        </>
    );
};

export default TaskListItem;
