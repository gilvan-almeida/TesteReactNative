import { LabelType } from "../types/LabelTypes";
import { randomUUID } from "expo-crypto";

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
