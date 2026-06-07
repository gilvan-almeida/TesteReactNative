import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

export const KEYS_STORAGE = {
    tasks: "tasks",
    labels: "labels",
}