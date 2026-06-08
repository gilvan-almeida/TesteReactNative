import { TaskType } from "./TaskTypes";

export type AuthListProps = {
  LockPage: undefined;
  PasswordPage: undefined;
};

export type AppStackParamList = {
    Tab: undefined;
    CreateTask: { task?: TaskType };
    EditTask: { task: TaskType };
};

export type AppTabParamList = {
    Home: undefined;
    Favoritos: undefined;
    LabelPage: undefined;
};