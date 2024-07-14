import { Dialog } from "@mui/material";

interface Props {
    open: boolean;
}

const TaskDialog = ({ open }: Props) => {
    return <Dialog open={open}>Hello</Dialog>;
};

export default TaskDialog;
