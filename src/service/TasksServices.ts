import { TaskType } from "../types/TaskTypes";
import { KEYS_STORAGE } from "../database/Storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TaskService = {
    async getTask(): Promise<TaskType[]>{
        try{
            const date = await AsyncStorage.getItem(KEYS_STORAGE.tasks)
            return date ? JSON.parse(date) : [];
        } catch{
            return [];
        }
    },
    async setTask(task: TaskType[]): Promise<void>{
        try{
            await AsyncStorage.setItem(KEYS_STORAGE.tasks, JSON.stringify(task))
        }catch(e){
            console.error("Error ao salvar: ", e)
        }
    },
    async resetAllTask(): Promise<void>{
        await AsyncStorage.removeItem(KEYS_STORAGE.tasks)
    }
}