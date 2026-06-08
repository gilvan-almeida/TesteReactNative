import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useTaskContext } from "../../context/TaskContext";
import { useLabelContext } from "../../context/TaskContext";

export function CreateTaskPage({ navigation }: any) {
    const { createTask } = useTaskContext();
    const { labels } = useLabelContext();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [labelId, setLabelId] = useState<string | null>(null);
    const [error, setError] = useState("");

    const handleSave = async () => {
        if (!name.trim()) {
            setError("Título é obrigatório!");
            return;
        }
        if (endDate && endDate < startDate) {
            setError("Data de fim não pode ser anterior à data de início!");
            return;
        }

        await createTask({
            name,
            description,
            startDate,
            endDate: endDate || null,
            labelId,
            completed: false,
            favorite: false,
        });

        navigation.goBack();
    };

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Text>Nova Tarefa</Text>

            {error ? <Text style={{ color: "red" }}>{error}</Text> : null}

            <Text>Título *</Text>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Digite o título"
            />

            <Text>Descrição</Text>
            <TextInput
                value={description}
                onChangeText={setDescription}
                placeholder="Digite a descrição (opcional)"
            />

            <Text>Data início</Text>
            <TextInput
                value={startDate}
                onChangeText={setStartDate}
                placeholder="YYYY-MM-DD"
            />

            <Text>Data fim (opcional)</Text>
            <TextInput
                value={endDate}
                onChangeText={setEndDate}
                placeholder="YYYY-MM-DD"
            />

            <Text>Label</Text>
            {labels.map(label => (
                <Button
                    key={label.id}
                    title={labelId === label.id ? `✅ ${label.name}` : label.name}
                    onPress={() => setLabelId(label.id)}
                />
            ))}

            <Button title="Salvar" onPress={handleSave} />
            <Button title="Cancelar" onPress={() => navigation.goBack()} />
        </View>
    );
}