import { LabelType } from "../types/LabelTypes";
import { randomUUID } from "expo-crypto";
import { FilterType } from "../types/TaskTypes";

export const DEFAULT_LABEL: LabelType[] = [
    {
        id: randomUUID(),
        name: "Trabalho",
        color:"#C44B33"
    },{
        id: randomUUID(),
        name: "Pessoal",
        color:"#C4B833"
    },{
        id: randomUUID(),
        name: "Estudos",
        color:"#5AC433"
    },

]

export const FIXED_FILTERS: { label: string; value: FilterType }[] = [
    { label: "Todas", value: "all" },
    { label: "Hoje", value: "today" },
    { label: "Favoritas", value: "favorites" },
    { label: "Concluídas", value: "completed" },
];