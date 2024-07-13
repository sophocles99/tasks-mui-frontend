import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const getTasks = async (): Promise<FullTask[]> => {
    const response = await axios.get("tasks/");
    console.log(response.data);
    return response.data;
};

const postTask = async (task: NewTask) => {
    const response = await axios.post("tasks/", task);
    return response.data as FullTask;
};

const patchTask = async (id: string, taskPatch: TaskPatch) => {
    await axios.patch(`tasks/${id}`, taskPatch);
};

export { getTasks, postTask, patchTask };
