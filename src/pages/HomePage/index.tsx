// pages/HomePage/index.tsx
import { View, Text, FlatList, Button } from "react-native";
import { useTaskContext } from "../../context/TaskContext";
import { useLabelContext } from "../../context/TaskContext";
import { TaskCard } from "../../components/TaskCard/TaskCard";
import { TaskType } from "../../types/TaskTypes";

export function HomePage({ navigation }: any) {
    const { tasks } = useTaskContext();
    const { labels } = useLabelContext();

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Button
                title="+ Nova Task"
                onPress={() => navigation.navigate("CreateTask")}
            />

            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }: { item: TaskType }) => (
                    <TaskCard task={item} onPress={() => navigation.navigate("CreateTask", { task: item })}/>
                )}
                ListEmptyComponent={
                    <Text>Nenhuma tarefa ainda!</Text>
                }
            />
        </View>
    );                                                                          
}