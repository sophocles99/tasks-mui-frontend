import { List } from "@mui/material";
import TaskListItem from "./TaskListItem";

interface Props {
    tasks: FullTask[];
    onStatusChange: (id: string, newStatus: Status) => void;
    onOpenTaskDialog: (task: FullTask) => void;
}

const TaskList = ({ tasks, onStatusChange, onOpenTaskDialog }: Props) => {
    return (
        <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {tasks.map((task) => (
                <TaskListItem
                    key={task.id}
                    task={task}
                    onClick={() => onOpenTaskDialog(task)}
                    onStatusChange={onStatusChange}
                />
            ))}
        </List>
    );
};

export default TaskList;
