import React from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components/native";
import { Plus } from "lucide-react-native";
import { useLabelContext, useTaskContext } from "../../context/TaskContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../types/NavigationType";

import {
  Container,
  HeaderContainer,
  TitleText,
  ListContainer,
  LabelCard,
  ColorCircle,
  LabelInfo,
  LabelName,
  TaskCount,
  EditButton,
  EditButtonText,
  FloatingActionButton,
  EmptyText,
  SubtitleText
} from "./style";

type LabelsPageProps = {
  navigation: NativeStackNavigationProp<AppStackParamList>;
};

export function LabelsPage({ navigation }: LabelsPageProps) {
  const theme = useTheme();
  const { labels } = useLabelContext(); 
  const { tasks } = useTaskContext();   

  return (
    <Container>
      <HeaderContainer>
        <TitleText>Categorias</TitleText>
        <SubtitleText>
            Edite e crie sua categoria
        </SubtitleText>
      </HeaderContainer>

      <ListContainer>
        <FlatList
          data={labels}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          renderItem={({ item }) => {
            const count = tasks.filter((t) => t.labelId === item.id).length;

            return (
              <LabelCard>
                <ColorCircle color={item.color} />
                <LabelInfo>
                  <LabelName>{item.name}</LabelName>
                  <TaskCount>{count} {count === 1 ? "task" : "tasks"}</TaskCount>
                </LabelInfo>

                <EditButton onPress={() => navigation.navigate("CreateLabel", { label: item })}>
                  <EditButtonText>Edit</EditButtonText>
                </EditButton>
              </LabelCard>
            );
          }}
          ListEmptyComponent={<EmptyText>Nenhuma label cadastrada!</EmptyText>}
        />
      </ListContainer>

      <FloatingActionButton onPress={() => navigation.navigate("CreateLabel", {})}>
        <Plus size={24} color={theme.colors.white} />
      </FloatingActionButton>
    </Container>
  );
}