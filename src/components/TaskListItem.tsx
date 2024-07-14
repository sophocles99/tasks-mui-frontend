import { CheckBoxOutlineBlank, CheckBoxOutlined } from "@mui/icons-material";
import {
    Checkbox,
    ListItem,
    ListItemButton,
    ListItemText,
    Theme,
    styled,
    useTheme,
} from "@mui/material";

interface StyledComponentProps {
    theme: Theme;
}

const StyledListItem = styled(ListItem)(({ theme }: StyledComponentProps) => ({
    paddingLeft: theme.spacing(0),
}));

const StyledListItemButton = styled(ListItemButton)(
    ({ theme }: StyledComponentProps) => ({
        paddingLeft: theme.spacing(2),
    })
);

interface Props {
    task: FullTask;
    onClick: () => void;
    onStatusChange: (id: string, newStatus: Status) => void;
}

const TaskListItem = ({ task, onStatusChange, onClick }: Props) => {
    const { id, title, status } = task;
    const theme = useTheme();

    const handleStatusClick = () => {
        const newStatus: Status = status === "done" ? "not done" : "done";
        console.log(newStatus);
        onStatusChange(id, newStatus);
    };

    return (
        <StyledListItem
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
            <StyledListItemButton
                disableGutters={true}
                onClick={onClick}
                theme={theme}
            >
                <ListItemText sx={{ color: "inherit", whiteSpace: "nowrap" }}>
                    {title}
                </ListItemText>
            </StyledListItemButton>
        </StyledListItem>
    );
};

export default TaskListItem;
