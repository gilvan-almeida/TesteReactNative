import { LabelType } from "../types/LabelTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEYS_STORAGE } from "../database/Storage";

export const LabelService = {

    async getLabel(): Promise<LabelType[]>{
        try{
            const date = await AsyncStorage.getItem(KEYS_STORAGE.labels);
            return date ? JSON.parse(date): [];
        } catch{
            return [];
        }
    },
    async setLabel(label: LabelType[]): Promise<void>{
        try{
            await AsyncStorage.setItem(KEYS_STORAGE.labels, JSON.stringify(label))
        }catch(e){
            console.error("Error ao salvar Label", e)
        }
    },
    async resetAllLabel(): Promise<void>{
        await AsyncStorage.removeItem(KEYS_STORAGE.labels)
    }
}