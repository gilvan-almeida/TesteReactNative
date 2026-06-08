export interface LabelType{
    id: string;
    name: string;
    color: string;
}

export type CreatedLabel = Omit<LabelType, "id">