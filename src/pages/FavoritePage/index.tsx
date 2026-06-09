import React, { useState } from "react";
import { FlatList, Platform, KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useTaskContext } from "../../context/TaskContext";
import { TaskCard } from "../../components/TaskCard/TaskCard";
import { TaskType } from "../../types/TaskTypes";
import { SearchBar } from "../../components/SearchBar";
import { AppTabParamList, AppStackParamList } from "../../types/NavigationType";


import { Container, HeaderContainer, TitleText, SubtitleText, ToolbarContainer, ListContainer, EmptyText } from "./style";

type FavoritasPageProps = BottomTabScreenProps<AppTabParamList, "Favoritos"> & {
    navigation: NativeStackNavigationProp<AppStackParamList>;
};

export function FavoritasPage({ navigation }: FavoritasPageProps) {
    const { tasks } = useTaskContext();
    const [search, setSearch] = useState("");

    const favoriteTasks = tasks.filter((task) => task.favorite);

    const filteredBySearch = search.trim()
        ? favoriteTasks.filter((task) =>
            task.name.toLowerCase().includes(search.toLowerCase())
          )
        : favoriteTasks;

    return (
            <Container>
                <StatusBar style="dark" backgroundColor="transparent" translucent />

                <HeaderContainer>
                    <TitleText>Favoritos</TitleText>
                    <SubtitleText>
                        {filteredBySearch.length}{" "}
                        {filteredBySearch.length === 1 ? "tarefa favorita" : "tarefas favoritas"}
                    </SubtitleText>
                </HeaderContainer>

                <ToolbarContainer>
                    <SearchBar value={search} onChangeText={setSearch} />
                </ToolbarContainer>

                <ListContainer>
                    <FlatList
                        data={filteredBySearch}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 80 }}
                        renderItem={({ item }: { item: TaskType }) => (
                            <TaskCard
                                task={item}
                                onPress={() => navigation.navigate("EditTask", { task: item })}
                            />
                        )}
                        ListEmptyComponent={
                            <EmptyText>Nenhuma tarefa favorita ainda!</EmptyText>
                        }
                    />
                </ListContainer>
            </Container>
    );
}