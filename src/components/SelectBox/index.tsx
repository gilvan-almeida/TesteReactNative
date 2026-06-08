import { useTaskContext, useLabelContext } from "../../context/TaskContext";
import { Wrapper, ChipScroll, FilterChip, FilterChipText } from "./style";
import { FIXED_FILTERS } from "../../config/LabelConfig";

export function SelectBox() {
    const { filter, setFilter, filterLabel, selectLabel } = useTaskContext();
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
        </Wrapper>
    );
}