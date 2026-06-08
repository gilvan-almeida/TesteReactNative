import { useState, useCallback, useEffect } from "react";
import { randomUUID } from "expo-crypto";
import { TaskType, CreatedTask, FilterType, OrderTaskType } from "../types/TaskTypes";
import { TaskService } from "../service/TasksServices";

export function useTask(){
    const [tasks, setTask] = useState<TaskType[]>([]);
    const [filter, setFilter] = useState<FilterType>("all");
    const [order, setOrder] = useState<OrderTaskType>("createdAd")
    const [selectLabel, setSelectLabel] = useState<string | null>(null);

    useEffect(()=>{
        const saved = TaskService.getTask();
        setTask(saved);
    },[]);

    const createTask = useCallback((date: CreatedTask) => {
        const newTask: TaskType = {
            id: randomUUID(),
            createdAd: new Date().toISOString(),
            ...date
        };
        const updateNewTask = [...tasks, newTask];
        setTask(updateNewTask)
        TaskService.setTask(updateNewTask);
    },[tasks]);

    const updateTask = useCallback((id: string, date: Partial<CreatedTask>)=>{
        const updateTask = tasks.map((task) => {
            if(task.id === id){
                return {...task, ...date}
            }else{
                return task
            }
        });
        setTask(updateTask)
        TaskService.setTask(updateTask);
    },[tasks]);

    const deleteTask = useCallback((id: string) =>{
        const verifyTask = tasks.filter((task) =>{
            task.id !== id
        });
        setTask(verifyTask);
        TaskService.setTask(verifyTask);
    },[tasks]);

    const completedTask = useCallback((id: string) => {
        const verifyTask = tasks.map((task) =>{
            if(task.id === id){
                return {...task, completed: !task.completed}
            }else{
                return task
            }
        });
        setTask(verifyTask);
        TaskService.setTask(verifyTask);
    }, [tasks]);

    const favoritedTask = useCallback((id: string) =>{
        const verifyTask = tasks.map((task) => {
            if(task.id === id){
                return {...task, favorite: !task.favorite}
            }else{
                return task;
            }
        })
        setTask(verifyTask);
        TaskService.setTask(verifyTask);
    },[tasks]);


    const moveLabelTask = useCallback((id: string, labelId: string) => {
        const verifyTask = tasks.map((task) =>{
            if(task.id === id){
                return {...task, labelId}
            }else{
                return task;
            }
        });
        setTask(verifyTask);
        TaskService.setTask(verifyTask);
    },[tasks]);


    const clearLabelTask = useCallback((labelId: string) =>{
        const verifyTask = tasks.map((task) => {
            if(task.labelId === labelId){
                return {...task, labelId: null}
            }else{
                return task;
            }
        });
        setTask(verifyTask);
        TaskService.setTask(verifyTask);
    },[tasks]);


    const filterLabel = useCallback((labelId: string) => {
        setSelectLabel(labelId);
        setFilter("label");
    },[])

    const filteredTasks = useCallback(() => {
        const dateDay = new Date().toISOString().split("T")[0];
        //remover
        console.log(dateDay);

        let result = [...tasks];

        switch (filter){
            case "today":
                result = result.filter((task) => task.startDate === dateDay);
                break
            case "favorites":
                result = result.filter((task) => task.favorite);
                break
            case "completed":
                result = result.filter((task) => task.completed);
            case "label":
                result = result.filter((task) => task.labelId === selectLabel);
                break
            default:
                break;
        }

        switch (order) {
            case "date":
                result.sort((a, b) => a.startDate.localeCompare(b.startDate));
                break;
            case "createdAd":
                result.sort((a,b) => b.createdAd.localeCompare(a.createdAd));
                break;
            case "alphabetical":
                result.sort((a,b) => a.name.localeCompare(b.name));
                break;
        }

        return result
    },[tasks, filter, order])
    
    return { tasks: filteredTasks(), createTask, updateTask, deleteTask, completedTask, favoritedTask, moveLabelTask, clearLabelTask, filter, setFilter, order, setOrder, filterLabel, selectLabel }






}