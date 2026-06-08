import { LabelType } from "../types/LabelTypes";
import { randomUUID } from "expo-crypto";
import { FilterType } from "../types/TaskTypes";

export const DEFAULT_LABEL: LabelType[] = [
    {
        id: "label-trabalho-default",
        name: "Trabalho",
        color: "#C44B33"
    },
    {
        id: "label-pessoal-default",
        name: "Pessoal",
        color: "#C4B833"
    },
    {
        id: "label-estudos-default",
        name: "Estudos",
        color: "#5AC433"
    },
]

export const FIXED_FILTERS: { label: string; value: FilterType }[] = [
    { label: "Todas", value: "all" },
    { label: "Hoje", value: "today" },
    { label: "Favoritas", value: "favorites" },
    { label: "Concluídas", value: "completed" },
];

export const AVAILABLE_COLORS = [
    "#6C63FF", 
    "#FF4A85", 
    "#FF9F1C", 
    "#10B981", 
    "#3B82F6", 
    "#6B7280"
];