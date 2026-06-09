import { useState, useCallback, useEffect } from "react";
import { randomUUID } from "expo-crypto";
import { LabelService } from "../service/LabelService";
import { LabelType, CreatedLabel } from "../types/LabelTypes";
import { DEFAULT_LABEL } from "../config/LabelConfig";
import { TaskType } from "../types/TaskTypes";

export function useLabel(){
    const [labels, setLabels] = useState<LabelType[]>([]);
    const [storageError, setStorageError] = useState(false);

    useEffect(() =>{
        const loadLabels = async () => {
            try {
                const saved = await LabelService.getLabel();
                if(saved.length === 0){
                    await LabelService.setLabel(DEFAULT_LABEL);
                    setLabels(DEFAULT_LABEL);
                }else{
                    setLabels(saved);
                }
            } catch (error) {
                setStorageError(true);
            }
        };
        loadLabels();
    },[]);

    const createLabel = useCallback(async (date: CreatedLabel) =>{
        try {
            const newLabel: LabelType = {
                id: randomUUID(),
                ...date,
            };
            const updateNewLabel = [...labels, newLabel];
            setLabels(updateNewLabel);
            await LabelService.setLabel(updateNewLabel);
        } catch (error) {
            setStorageError(true);
        }
    },[labels]);

    const updateLabel = useCallback(async (id: string, date: Partial<CreatedLabel>)=>{
        try {
            const update = labels.map((label) =>{
                if(label.id === id){
                    return { ...label, ...date}
                }
                return label
            })
            setLabels(update);
            await LabelService.setLabel(update);
        } catch (error) {
            setStorageError(true);
        }
    },[labels]);

    const deleteLabel = useCallback(async(id: string) =>{
        try {
            const verifyLabel = labels.filter((label) => label.id !== id);
            setLabels(verifyLabel);
            await LabelService.setLabel(verifyLabel);
        } catch (error) {
            setStorageError(true);
        }
    },[labels]);

    const contTaskLabel = useCallback((labelId: string, tasks: TaskType[]) => {
        return tasks.filter((task) => task.labelId === labelId).length;
    },[])

    return {labels, createLabel, updateLabel, deleteLabel, contTaskLabel, storageError}
}