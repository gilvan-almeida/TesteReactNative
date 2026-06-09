import React, { useState } from "react";
import { Modal, FlatList, Alert } from "react-native";
import { useTheme } from "styled-components/native";
import { TaskType } from "../../types/TaskTypes";
import { useTaskContext, useLabelContext } from "../../context/TaskContext";
import { Circle, CheckCircle2, Star, Tag, Trash2 } from "lucide-react-native";
import { formatDate } from "../../utils/formatDate";

import {
  CardContainer, LeftContent, CheckButton, TextContainer, TaskTitle,
  TaskDescription, FooterRow, TaskDate, LabelBadge, LabelText, FavoriteButton,
  ModalOverlay, ModalBox, ModalTitle, ModalItem, ModalItemText, ModalClose,
  DeleteButton,
} from "./style";

interface TaskCardProps {
  task: TaskType;
  onPress?: () => void;
}

export function TaskCard({ task, onPress }: TaskCardProps) {
  const theme = useTheme();
  const { completedTask, favoritedTask, moveLabelTask, deleteTask } = useTaskContext();
  const { labels } = useLabelContext();
  const [showLabelModal, setShowLabelModal] = useState(false);

  const label = labels.find((l) => l.id === task.labelId);

  const handleDelete = () => {
    Alert.alert(
      "Excluir tarefa",
      `"${task.name}" será removida permanentemente.`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => await deleteTask(task.id),
        },
      ]
    );
  };

  const handleMoveLabel = async (labelId: string) => {
    await moveLabelTask(task.id, labelId);
    setShowLabelModal(false);
  };

  return (
    <>
      <CardContainer onPress={onPress} onLongPress={() => setShowLabelModal(true)}>
        <LeftContent>
          <CheckButton onPress={() => completedTask(task.id)}>
            {task.completed ? (
              <CheckCircle2 size={24} color={theme.colors.success} fill={theme.colors.success} />
            ) : (
              <Circle size={24} color={theme.colors.border} />
            )}
          </CheckButton>

          <TextContainer>
            <TaskTitle isCompleted={task.completed}>{task.name}</TaskTitle>
            {task.description && (
              <TaskDescription numberOfLines={1}>{task.description}</TaskDescription>
            )}
            <FooterRow>
              <TaskDate>
                {task.endDate
                    ? `${formatDate(task.startDate)} → ${formatDate(task.endDate)}`
                    : formatDate(task.startDate)
                }
              </TaskDate>
              {label && (
                <LabelBadge color={label.color}>
                  <LabelText color={label.color}>{label.name}</LabelText>
                </LabelBadge>
              )}
            </FooterRow>
          </TextContainer>
        </LeftContent>

        <FavoriteButton onPress={() => favoritedTask(task.id)}>
          <Star
            size={24}
            color={task.favorite ? "#FFCC00" : theme.colors.textLight}
            fill={task.favorite ? "#FFCC00" : "transparent"}
          />
        </FavoriteButton>

        <DeleteButton onPress={handleDelete}>
          <Trash2 size={20} color={theme.colors.error} />
        </DeleteButton>
      </CardContainer>

      <Modal visible={showLabelModal} transparent animationType="fade">
        <ModalOverlay onPress={() => setShowLabelModal(false)}>
          <ModalBox>
            <ModalTitle>Mover para categoria</ModalTitle>
            <FlatList
              data={labels}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ModalItem
                  onPress={() => handleMoveLabel(item.id)}
                  isSelected={task.labelId === item.id}
                >
                  <Tag size={16} color={item.color} />
                  <ModalItemText isSelected={task.labelId === item.id}>
                    {item.name}
                  </ModalItemText>
                </ModalItem>
              )}
            />
            <ModalClose onPress={() => setShowLabelModal(false)}>
              <ModalItemText isSelected={false}>Cancelar</ModalItemText>
            </ModalClose>
          </ModalBox>
        </ModalOverlay>
      </Modal>
    </>
  );
}