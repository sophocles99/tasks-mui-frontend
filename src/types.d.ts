type Status = "done" | "not done";

type TaskDialogMode = "add" | "edit";

interface NewTask {
    title: string;
    description: string;
}

interface FullTask extends NewTask {
    status: Status;
    created_at: string;
    id: string;
}

type TaskPatch = Partial<NewTask> & {
    status?: Status;
};
