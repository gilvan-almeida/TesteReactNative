import { useState, useCallback, useEffect } from "react";
import { randomUUID } from "expo-crypto";
import { LabelService } from "../service/LabelService";
import { LabelType, CreatedLabel } from "../types/LabelTypes";
import { DEFAULT_LABEL } from "../config/LabelConfig";
import { TaskType } from "../types/TaskTypes";

export function useLabel(){
    const [labels, setLabels] = useState<LabelType[]>([]);

    useEffect(() =>{
        const verifyLabel = LabelService.getLabel();
        if(verifyLabel.length === 0){
            LabelService.setLabel(DEFAULT_LABEL);
            setLabels(DEFAULT_LABEL);
        }else{
            setLabels(verifyLabel)
        }
    },[]);

    const createLabel = useCallback((date: CreatedLabel) =>{
        const newLabel: LabelType = {
            id: randomUUID(),
            ...date,
        };
        const updateNewLabel = [...labels, newLabel];
        setLabels(updateNewLabel);
        LabelService.setLabel(updateNewLabel);
    },[labels]);

    const updateLabel = useCallback((id: string, date: Partial<CreatedLabel>)=>{
        const update = labels.map((label) =>{
            if(label.id === id){
                return { ...label, ...date}
            }
            return label
        })
        setLabels(update);
        LabelService.setLabel(update);
    },[labels]);

    const deleteLabel = useCallback((id: string) =>{
        const verifyLabel = labels.filter((label) => label.id !== id);
        setLabels(verifyLabel);
        LabelService.setLabel(verifyLabel);

    },[labels]);

    const contTaskLabel = useCallback((labelId: string, tasks: TaskType[]) => {
        return tasks.filter((task) => task.labelId === labelId),length;
    },[])

    return {labels, createLabel, updateLabel, deleteLabel, contTaskLabel}
}