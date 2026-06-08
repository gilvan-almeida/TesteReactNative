// components/TaskCard/index.tsx
import { View, Text, TouchableOpacity } from "react-native";
import { TaskType } from "../types/TaskTypes";
import { useTaskContext } from "../context/TaskContext";
import { useLabelContext } from "../context/TaskContext";

interface TaskCardProps {
    task: TaskType;
}

export function TaskCard({ task }: TaskCardProps) {
    const { completedTask, favoritedTask } = useTaskContext();
    const { labels } = useLabelContext();
    const label = labels.find(l => l.id === task.labelId);

    return (
        <View style={{ padding: 16, borderBottomWidth: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text>{task.name}</Text>
                <TouchableOpacity onPress={() => favoritedTask(task.id)}>
                    <Text>{task.favorite ? "⭐" : "☆"}</Text>
                </TouchableOpacity>
            </View>
            {task.description && (
                <Text>{task.description}</Text>
            )}
            <Text>
                {task.endDate
                    ? `${task.startDate} até ${task.endDate}`
                    : task.startDate
                }
            </Text>

            <Text>
                {label ? label.name : "Sem categoria"}
            </Text>

            {/* concluir */}
            <TouchableOpacity onPress={() => completedTask(task.id)}>
                <Text>{task.completed ? "✅ Concluída" : "⬜ Concluir"}</Text>
            </TouchableOpacity>

        </View>
    );
}