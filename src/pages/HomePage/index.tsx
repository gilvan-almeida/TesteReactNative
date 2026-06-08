import React, { useState } from "react";
import { FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Plus } from "lucide-react-native";
import { useTheme } from "styled-components/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../types/NavigationType";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

import { useTaskContext } from "../../context/TaskContext";
import { TaskCard } from "../../components/TaskCard/TaskCard";
import { TaskType } from "../../types/TaskTypes";
import { SearchBar } from "../../components/SearchBar";
import { SelectBox } from "../../components/SelectBox";

import { AppTabParamList } from "../../types/NavigationType";

import { Container, HeaderContainer, GreetingText, SubtitleText, ToolbarContainer, ListContainer, EmptyText, FloatingActionButton } from "./style";

type HomePageProps = BottomTabScreenProps<AppTabParamList, "Home"> & {
    navigation: NativeStackNavigationProp<AppStackParamList>;
};

export function HomePage({ navigation }: HomePageProps) {
    const theme = useTheme();
    const { tasks, filter  } = useTaskContext(); 

    const [search, setSearch] = useState("");

    const pendingTasksCount = tasks.filter((task) => !task.completed).length;

    const filteredBySearch = search.trim()
        ? tasks.filter((task) =>
            task.name.toLowerCase().includes(search.toLowerCase())
          )
        : tasks;
        const getSubtitle = () => {
        switch (filter) {
            case "today":
                return `${filteredBySearch.length} tarefas para hoje`;
            case "favorites":
                return `${filteredBySearch.length} tarefas favoritas`;
            case "completed":
                return `${filteredBySearch.length} tarefas concluídas`;
            case "label":
                return `${filteredBySearch.length} tarefas nesta categoria`;
            default:
                return `Você tem ${pendingTasksCount} ${pendingTasksCount === 1 ? "atividade pendente" : "atividades pendentes"}`;
        }
    };


    return (
        <Container>
            <StatusBar style="dark" backgroundColor="transparent" translucent />

            <HeaderContainer>
                <GreetingText>Bem Vindo </GreetingText>
                <SubtitleText>{getSubtitle()}</SubtitleText>
            </HeaderContainer>

            <ToolbarContainer>
                <SearchBar value={search} onChangeText={setSearch} />
                <SelectBox /> 
            </ToolbarContainer>

            <ListContainer>
                <FlatList
                    data={filteredBySearch} // ← usa o filtrado por search
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 100 }}
                    renderItem={({ item }: { item: TaskType }) => (
                        <TaskCard
                            task={item}
                            onPress={() => navigation.navigate("EditTask", { task: item })} // ← EditTask não CreateTask!
                        />
                    )}
                    ListEmptyComponent={
                        <EmptyText>Nenhuma tarefa encontrada!</EmptyText>
                    }
                />
            </ListContainer>

            <FloatingActionButton onPress={() => navigation.navigate("CreateTask", {})}>
                <Plus size={24} color={theme.colors.white} />
            </FloatingActionButton>
        </Container>
    );
}