import { View, Text, FlatList } from "react-native";
import { useTaskContext } from "../../context/TaskContext";
import { TaskCard } from "../../components/TaskCard/TaskCard";

export function FavoritasPage() {
    const { tasks } = useTaskContext();

    const favoriteTasks = tasks.filter(t => t.favorite);

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={favoriteTasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <TaskCard task={item} />}
                ListEmptyComponent={
                    <Text>Nenhuma tarefa favorita!</Text>
                }
            />
        </View>
    );
}