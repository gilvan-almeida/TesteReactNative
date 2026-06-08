import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { X, Calendar, Tag } from "lucide-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useTaskContext, useLabelContext } from "../../context/TaskContext";
import { TaskType } from "../../types/TaskTypes";
import { AppStackParamList } from "../../types/NavigationType";
import { DateRangePicker } from "../../components/DateCard";
import { Container, ScrollContainer, HeaderRow, Title, CloseButton, ErrorText, FormGroup, InputLabel, RequiredMark, StyledInput, TextArea, InputWithIcon, IconWrapper, InputField, LabelScroll, LabelChip, LabelChipText, SubmitButton, SubmitButtonText } from "./style";


type CreateTaskPageProps = NativeStackScreenProps<AppStackParamList, "CreateTask"> | NativeStackScreenProps<AppStackParamList, "EditTask">;

export function CreateTaskPage({ navigation, route }: CreateTaskPageProps) {
  const { createTask, updateTask } = useTaskContext();
  const { labels } = useLabelContext();

  const taskToEdit = (route.params as { task?: TaskType })?.task;
  const isEditing = !!taskToEdit;

  const [name, setName] = useState(taskToEdit?.name || "");
  const [description, setDescription] = useState(taskToEdit?.description || "");
  const [startDate, setStartDate] = useState(taskToEdit?.startDate || "");
  const [endDate, setEndDate] = useState(taskToEdit?.endDate || "");
  const [labelId, setLabelId] = useState<string | null>(taskToEdit?.labelId || null);
  const [error, setError] = useState("");

  const handleSave = async () => {
    if (!name.trim()) {
      setError("O título da tarefa é obrigatório!");
      return;
    }
    if (endDate && endDate < startDate) {
      setError("A data de fim não pode ser anterior à data de início!");
      return;
    }

    if (isEditing && taskToEdit) {
      await updateTask(taskToEdit.id, {
        name,
        description,
        startDate,
        endDate: endDate || null,
        labelId,
      });
    } else {
      await createTask({
        name,
        description,
        startDate,
        endDate: endDate || null,
        labelId,
        completed: false,
        favorite: false,
      });
    }

    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Container>
        <ScrollContainer>
            <HeaderRow>
            <Title>{isEditing ? "Editar Tarefa" : "Nova Tarefa"}</Title>
            <CloseButton onPress={() => navigation.goBack()}>
                <X size={20} color="#1A1A1A" />
            </CloseButton>
            </HeaderRow>

            {error ? <ErrorText>{error}</ErrorText> : null}

            <FormGroup>
            <InputLabel>Title <RequiredMark>*</RequiredMark></InputLabel>
            <StyledInput
                value={name}
                onChangeText={(text) => {
                setName(text);
                setError("");
                }}
                placeholder="Titulo da Atividade"
                placeholderTextColor="#A0A0A0"
            />
            </FormGroup>

            <FormGroup>
            <InputLabel>Description</InputLabel>
            <TextArea
                value={description}
                onChangeText={setDescription}
                placeholder="Detalhes da Atividade (Opicional)"
                placeholderTextColor="#A0A0A0"
                multiline
                textAlignVertical="top"
            />
            </FormGroup>

            <FormGroup>
                <InputLabel>Data</InputLabel>
                <DateRangePicker
                    startDate={startDate}
                    endDate={endDate}
                    onChangeStart={setStartDate}
                    onChangeEnd={setEndDate}
                />
            </FormGroup>

            <FormGroup>
            <InputLabel>Categorias</InputLabel>
            <LabelScroll horizontal showsHorizontalScrollIndicator={false}>
                {labels.map((label) => {
                const isSelected = labelId === label.id;
                return (
                    <LabelChip
                    key={label.id}
                    isSelected={isSelected}
                    onPress={() => setLabelId(isSelected ? null : label.id)}
                    >
                    <Tag size={16} color={isSelected ? "#FFFFFF" : "#666666"} />
                    <LabelChipText isSelected={isSelected}>
                        {label.name}
                    </LabelChipText>
                    </LabelChip>
                );
                })}
            </LabelScroll>
            </FormGroup>

            <SubmitButton onPress={handleSave}>
            <SubmitButtonText>
                {isEditing ? "Salvar Alterações" : "Criar Atividade"}
            </SubmitButtonText>
            </SubmitButton>
        </ScrollContainer>
      </Container>
    </KeyboardAvoidingView>
  );
}