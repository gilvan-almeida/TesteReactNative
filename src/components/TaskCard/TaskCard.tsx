import React from "react";
import { useTheme } from "styled-components/native";
import { TaskType } from "../../types/TaskTypes";
import { useTaskContext, useLabelContext } from "../../context/TaskContext";
import { Circle, CheckCircle2, Star } from "lucide-react-native";

import { CardContainer, LeftContent, CheckButton, TextContainer, TaskTitle, TaskDescription, FooterRow, TaskDate, LabelBadge, LabelText,FavoriteButton } from "./style";

interface TaskCardProps {
  task: TaskType;
  onPress?: () => void;
}


export function TaskCard({ task, onPress }: TaskCardProps) {
  const theme = useTheme();
  const { completedTask, favoritedTask } = useTaskContext();
  const { labels } = useLabelContext();

  const label = labels.find((l) => l.id === task.labelId);

  return (
    <CardContainer onPress={onPress}>
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
                    ? `${task.startDate} - ${task.endDate}`
                    : task.startDate}
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
    </CardContainer>
  );
}