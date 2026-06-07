export interface TaskType{
    id: string;
    nama: string;
    description?: string;
    labelId: string | null;
    favorite: boolean;
    completed: boolean;
    startDate: string;
    endDate: string | null;
    createdAd: string;
}

export type createdTask = Omit<TaskType, "id"| "createdAd">

export type orderTaskType = "date" | "createdAd" | "alphabetical";

export type FilterType = "all" | "today" | "favorites" | "completed" | "label";