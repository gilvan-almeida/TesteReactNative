import React from "react"; 
import { useTaskContext, useLabelContext } from "../../context/TaskContext";
import { Wrapper, ChipScroll, FilterChip, FilterChipText, OrderContainer } from "./style"; // Importe o OrderContainer aqui
import { FIXED_FILTERS } from "../../config/LabelConfig";

export function SelectBox() {
    const { filter, setFilter, filterLabel, selectLabel, order, setOrder } = useTaskContext();
    const { labels } = useLabelContext();

    return (
        <Wrapper>
            <ChipScroll horizontal showsHorizontalScrollIndicator={false}>
                {FIXED_FILTERS.map((item) => {
                    const isSelected = filter === item.value;
                    return (
                        <FilterChip
                            key={item.value}
                            isSelected={isSelected}
                            onPress={() => setFilter(item.value)}
                        >
                            <FilterChipText isSelected={isSelected}>
                                {item.label}
                            </FilterChipText>
                        </FilterChip>
                    );
                })}

                {labels.map((label) => {
                    const isSelected = filter === "label" && selectLabel === label.id;
                    return (
                        <FilterChip
                            key={label.id}
                            isSelected={isSelected}
                            onPress={() => filterLabel(label.id)}
                            color={label.color}
                        >
                            <FilterChipText isSelected={isSelected}>
                                {label.name}
                            </FilterChipText>
                        </FilterChip>
                    );
                })}
            </ChipScroll>

            <OrderContainer>
                <FilterChip 
                    isSelected={order === "createdAd"} 
                    onPress={() => setOrder("createdAd")}
                    style={{ flex: 1, alignItems: 'center', marginRight: 8 }} 
                >
                    <FilterChipText isSelected={order === "createdAd"}>
                        Recentes
                    </FilterChipText>
                </FilterChip>

                <FilterChip 
                    isSelected={order === "date"} 
                    onPress={() => setOrder("date")}
                    style={{ flex: 1, alignItems: 'center', marginRight: 8 }}
                >
                    <FilterChipText isSelected={order === "date"}>
                        Por Prazo
                    </FilterChipText>
                </FilterChip>

                <FilterChip 
                    isSelected={order === "alphabetical"} 
                    onPress={() => setOrder("alphabetical")}
                    style={{ flex: 1, alignItems: 'center', marginRight: 0 }} 
                >
                    <FilterChipText isSelected={order === "alphabetical"}>
                        Nome (A-Z)
                    </FilterChipText>
                </FilterChip>
            </OrderContainer>
        </Wrapper>
    );
}