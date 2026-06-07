export interface LabelType{
    id: string;
    name: string;
    color: string;
}

export type createdLabel = Omit<LabelType, "id">