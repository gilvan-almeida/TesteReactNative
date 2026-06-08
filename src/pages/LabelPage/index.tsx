
import { useState } from "react";
import { View, Text, FlatList, Button, TextInput } from "react-native";
import { useLabelContext } from "../../context/TaskContext";
import { useTaskContext } from "../../context/TaskContext";

export function LabelsPage() {
    const { labels, createLabel, updateLabel, deleteLabel } = useLabelContext();
    const { tasks, clearLabelTask } = useTaskContext();

    const [newLabelName, setNewLabelName] = useState("");
    const [newLabelColor, setNewLabelColor] = useState("#FF0000");
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editingName, setEditingName] = useState("");

    const handleCreate = async () => {
        if (!newLabelName.trim()) return;
        await createLabel({ name: newLabelName, color: newLabelColor });
        setNewLabelName("");
    };

    const handleUpdate = async (id: string) => {
        if (!editingName.trim()) return;
        await updateLabel(id, { name: editingName });
        setEditingId(null);
        setEditingName("");
    };

    const handleDelete = async (id: string) => {
        await deleteLabel(id);
        await clearLabelTask(id); 
    };

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Text>Labels</Text>

            <TextInput
                value={newLabelName}
                onChangeText={setNewLabelName}
                placeholder="Nome da label"
            />
            <TextInput
                value={newLabelColor}
                onChangeText={setNewLabelColor}
                placeholder="Cor (ex: #FF0000)"
            />
            <Button title="+ Criar Label" onPress={handleCreate} />

            <FlatList
                data={labels}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ padding: 8, borderBottomWidth: 1 }}>

                        {editingId === item.id ? (
                            <>
                                <TextInput
                                    value={editingName}
                                    onChangeText={setEditingName}
                                    placeholder="Novo nome"
                                />
                                <Button title="Salvar" onPress={() => handleUpdate(item.id)} />
                                <Button title="Cancelar" onPress={() => setEditingId(null)} />
                            </>
                        ) : (
                            <>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <View style={{
                                        width: 16,
                                        height: 16,
                                        borderRadius: 8,
                                        backgroundColor: item.color,
                                        marginRight: 8
                                    }} />
                                    <Text>{item.name}</Text>
                                    <Text> ({tasks.filter(t => t.labelId === item.id).length})</Text>
                                </View>

                                <Button title="Editar" onPress={() => {
                                    setEditingId(item.id);
                                    setEditingName(item.name);
                                }} />
                                <Button title="Deletar" onPress={() => handleDelete(item.id)} />
                            </>
                        )}
                    </View>
                )}
                ListEmptyComponent={<Text>Nenhuma label!</Text>}
            />
        </View>
    );
}