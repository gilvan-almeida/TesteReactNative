import React, { useState, useEffect } from "react";
import { TextInput, TouchableOpacity, Alert } from "react-native";
import { useLabelContext, useTaskContext } from "../../context/TaskContext";
import { RouteProp } from "@react-navigation/native";
import { AppStackParamList } from "../../types/NavigationType";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AVAILABLE_COLORS } from "../../config/LabelConfig";
import { X, Trash2 } from "lucide-react-native";

import { Container, Header, Title, CloseButton, FieldLabel, InputContainer, ColorRow, ColorOption, SubmitButton, SubmitButtonText, DeleteButton, DeleteButtonText } from "./style";

type CreateLabelPageProps = {
  route: RouteProp<AppStackParamList, "CreateLabel">;
  navigation: NativeStackNavigationProp<AppStackParamList>;
};



export function CreateLabelPage({ route, navigation }: CreateLabelPageProps) {
  const { createLabel, updateLabel, deleteLabel } = useLabelContext();
  const { clearLabelTask } = useTaskContext();
  
  const editingLabel = route.params?.label;

  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState(AVAILABLE_COLORS[0]);
  useEffect(() => {
    if (editingLabel) {
      setName(editingLabel.name);
      setSelectedColor(editingLabel.color);
    }
  }, [editingLabel]);

  const handleSave = async () => {
    if (!name.trim()) {
      Alert.alert("Aviso", "Por favor, insira o nome da label.");
      return;
    }

    if (editingLabel) {
      await updateLabel(editingLabel.id, { name, color: selectedColor });
    } else {
      await createLabel({ name, color: selectedColor });
    }

    navigation.goBack();
  };

  const handleDeleteLabel = async () => {
    if (!editingLabel) return;
    
    Alert.alert("Deletar Label", "Tem certeza que deseja excluir esta etiqueta?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Excluir",
        style: "destructive",
        onPress: async () => {
          await deleteLabel(editingLabel.id);
          await clearLabelTask(editingLabel.id);
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <Container>
      <Header>
        <Title>{editingLabel ? "Editar Categoria" : "Nova Categoria"}</Title>
        <CloseButton onPress={() => navigation.goBack()}>
          <X size={20} color="#1A202C" />
        </CloseButton>
      </Header>

      <FieldLabel>Nome Categoria</FieldLabel>
      <InputContainer>
        <TextInput
          placeholder="Digite o nome da Categoria"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#A0AEC0"
          style={{ fontSize: 16, color: "#2D3748", padding: 0 }}
        />
      </InputContainer>

      <FieldLabel>Escolha Cores</FieldLabel>
      <ColorRow>
        {AVAILABLE_COLORS.map((color) => (
          <TouchableOpacity key={color} onPress={() => setSelectedColor(color)}>
            <ColorOption
              color={color}
              isSelected={selectedColor === color}
            />
          </TouchableOpacity>
        ))}
      </ColorRow>
      <SubmitButton onPress={handleSave}>
        <SubmitButtonText>
          {editingLabel ? "Save Changes" : "Create Label"}
        </SubmitButtonText>
      </SubmitButton>
      {editingLabel && (
        <DeleteButton onPress={handleDeleteLabel}>
          <Trash2 size={16} color="#E53E3E" style={{ marginRight: 6 }} />
          <DeleteButtonText>Delete Categoria</DeleteButtonText>
        </DeleteButton>
      )}
    </Container>
  );
}