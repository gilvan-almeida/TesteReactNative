import React, { createContext, useContext } from "react";
import { useTask } from "../hooks/TaskHook";
import { useLabel } from "../hooks/LabelHook";
import { ErrorPage } from "../pages/ErrorPage";

type TaskContextType = ReturnType<typeof useTask>;
type LabelContextTyoe = ReturnType<typeof useLabel>;

const TaskContext = createContext<TaskContextType>({} as TaskContextType);
const LabelContext = createContext<LabelContextTyoe>({} as LabelContextTyoe);

export function useTaskContext(){
    return useContext(TaskContext);
}

export function useLabelContext(){
    return useContext(LabelContext);
}

export function AppProvider({children, onReset}: {children: React.ReactNode, onReset: () => void}){
    const valueTask = useTask();
    const valueLabel = useLabel();

    const hasStorageError = valueTask.storageError || valueLabel.storageError;

    if (hasStorageError) {
        return (
            <ErrorPage onReset={onReset} />
        );
    }

    return( 
        <TaskContext.Provider value={valueTask}>
            <LabelContext.Provider value={valueLabel}>
                {children}
            </LabelContext.Provider>
        </TaskContext.Provider>
    )
}

