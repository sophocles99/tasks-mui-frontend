import { List } from "@mui/material";
import TaskListItem from "./TaskListItem";

interface Props {
    tasks: FullTask[];
    onStatusChange: (id: string, newStatus: Status) => void;
}

const TaskList = ({ tasks, onStatusChange }: Props) => {
    return (
        <List>
            {tasks.map((task) => (
                <TaskListItem
                    key={task.id}
                    task={task}
                    onStatusChange={onStatusChange}
                />
            ))}
        </List>
    );
};

export default TaskList;
