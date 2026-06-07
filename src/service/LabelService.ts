import { LabelType } from "../types/LabelTypes";
import { storage, KEYS_STORAGE } from "../database/Storage";

export const LabelService = {

    getLabel(): LabelType[] {
        try{
            const date = storage.getString(KEYS_STORAGE.labels);
            return date ? JSON.parse(date): [];
        } catch{
            return [];
        }
    },
    setLabel(label: LabelType[]): void{
        try{
            storage.set(KEYS_STORAGE.labels, JSON.stringify(label))
        }catch(e){
            console.error("Error ao salvar Label", e)
        }
    },
    resetAllLabel():void{
        storage.delete(KEYS_STORAGE.labels)
    }
}