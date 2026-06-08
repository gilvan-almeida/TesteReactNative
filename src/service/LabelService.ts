import { LabelType } from "../types/LabelTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEYS_STORAGE } from "../database/Storage";

export const LabelService = {

    async getLabel(): Promise<LabelType[]>{
        const data = await AsyncStorage.getItem(KEYS_STORAGE.labels);
        return data ? JSON.parse(data) : [];
    },
    async setLabel(label: LabelType[]): Promise<void>{
        await AsyncStorage.setItem(KEYS_STORAGE.labels, JSON.stringify(label));
    },
    async resetAllLabel(): Promise<void>{
        await AsyncStorage.removeItem(KEYS_STORAGE.labels);
    }
}