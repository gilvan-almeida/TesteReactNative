import { TaskType } from "./TaskTypes";
import { LabelType } from "./LabelTypes";

export type AuthListProps = {
  LockPage: undefined;
  PasswordPage: undefined;
};

export type AppStackParamList = {
    Tab: undefined;
    CreateTask: { task?: TaskType };
    EditTask: { task: TaskType };
    CreateLabel: { label?: LabelType };
};

export type AppTabParamList = {
    Home: undefined;
    Favoritos: undefined;
    LabelPage: undefined;
};