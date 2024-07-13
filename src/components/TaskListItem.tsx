import { ListItem, ListItemText } from "@mui/material";

interface Props {
    task: FullTask;
    onStatusChange: (id: string, newStatus: Status) => void;
}

const TaskListItem = ({ task, onStatusChange }: Props) => {
    const { id, title, status } = task;

    const handleStatusClick = () => {
        let newStatus: Status;
        switch (status) {
            case "not done":
                newStatus = "in progress";
                break;
            case "in progress":
                newStatus = "done";
                break;
            case "done":
                newStatus = "not done";
                break;
            default:
                newStatus = "not done";
        }
        onStatusChange(id, newStatus);
    };

    return (
        <>
            <ListItem onClick={handleStatusClick}>
                <ListItemText>{title}</ListItemText>
            </ListItem>
        </>
    );
};

export default TaskListItem;
