export interface TaskType{
    id: string;
    name: string;
    description?: string;
    labelId: string | null;
    favorite: boolean;
    completed: boolean;
    startDate: string;
    endDate: string | null;
    createdAd: string;
}

export type CreatedTask = Omit<TaskType, "id"| "createdAd">

export type OrderTaskType = "date" | "createdAd" | "alphabetical";

export type FilterType = "all" | "today" | "favorites" | "completed" | "label";