import { TaskType } from "../types/TaskTypes";
import { KEYS_STORAGE } from "../database/Storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TaskService = {
    async getTask(): Promise<TaskType[]>{
        const data = await AsyncStorage.getItem(KEYS_STORAGE.tasks);
        return data ? JSON.parse(data) : [];
    },
    async setTask(task: TaskType[]): Promise<void>{
        await AsyncStorage.setItem(KEYS_STORAGE.tasks, JSON.stringify(task));
    },
    async resetAllTask(): Promise<void>{
        await AsyncStorage.removeItem(KEYS_STORAGE.tasks)
    }
}