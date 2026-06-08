import { useState } from "react";
import { Calendar, DateData } from "react-native-calendars";
import { useTheme } from "styled-components/native";
import { CalendarWrapper } from "./style";

interface DateRangePickerProps {
    startDate: string;
    endDate: string;
    onChangeStart: (date: string) => void;
    onChangeEnd: (date: string) => void;
}

export function DateRangePicker({ startDate, endDate, onChangeStart, onChangeEnd }: DateRangePickerProps) {
    const theme = useTheme();

    const handleDayPress = (day: DateData) => {
        if (!startDate || (startDate && endDate)) {
            onChangeStart(day.dateString);
            onChangeEnd("");
        } else {
            if (day.dateString < startDate) {
                onChangeEnd(startDate);
                onChangeStart(day.dateString);
            } else {
                onChangeEnd(day.dateString);
            }
        }
    };

    const getMarkedDates = () => {
        if (!startDate) return {};

        if (!endDate) {
            return {
                [startDate]: {
                    startingDay: true,
                    endingDay: true,
                    color: theme.colors.primary,
                    textColor: theme.colors.white,
                },
            };
        }

        const marked: Record<string, any> = {};
        const start = new Date(startDate);
        const end = new Date(endDate);
        const current = new Date(start);

        while (current <= end) {
            const dateStr = current.toISOString().split("T")[0];
            marked[dateStr] = {
                color: theme.colors.primaryLight,
                textColor: theme.colors.primary,
            };
            current.setDate(current.getDate() + 1);
        }

        marked[startDate] = {
            startingDay: true,
            color: theme.colors.primary,
            textColor: theme.colors.white,
        };
        marked[endDate] = {
            endingDay: true,
            color: theme.colors.primary,
            textColor: theme.colors.white,
        };

        return marked;
    };

    return (
        <CalendarWrapper>
            <Calendar
                onDayPress={handleDayPress}
                markedDates={getMarkedDates()}
                markingType="period"
                theme={{
                    todayTextColor: theme.colors.primary,
                    selectedDayBackgroundColor: theme.colors.primary,
                    arrowColor: theme.colors.primary,
                }}
            />
        </CalendarWrapper>
    );
}