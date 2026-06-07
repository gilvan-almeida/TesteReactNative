import { TaskType } from "../types/TaskTypes";
import { KEYS_STORAGE, storage } from "../database/Storage";

export const TaskService = {
    getTask(): TaskType[] {
        try{
            const date = storage.getString(KEYS_STORAGE.tasks)
            return date ? JSON.parse(date) : [];
        } catch{
            return [];
        }
    },
    setTask(task: TaskType[]): void{
        try{
            storage.set(KEYS_STORAGE.tasks, JSON.stringify(task))
        }catch(e){
            console.error("Error ao salvar: ", e)
        }
    },
    resetAllTask(): void{
        storage.delete(KEYS_STORAGE.tasks)
    }
}