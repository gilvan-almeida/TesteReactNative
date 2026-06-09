// components/PinInput/index.tsx
import { useRef } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import { PinInputType } from "../types/AuthenticTypes";


export function PinInput({ pin, onChangePin }: PinInputType) {
    const inputRef = useRef<TextInput>(null);

    return (
        <TouchableOpacity onPress={() => inputRef.current?.focus()}>
            <TextInput
                ref={inputRef}
                value={pin}
                onChangeText={onChangePin}
                keyboardType="numeric"
                maxLength={4}
                autoFocus
                style={{ position: "absolute", opacity: 0, width: 1, height: 1 }}
            />
            <View style={{ flexDirection: "row" }}>
                {[0, 1, 2, 3].map((i) => (
                    <View
                        key={i}
                        style={{
                            width: 16,
                            height: 16,
                            borderRadius: 8,
                            backgroundColor: i < pin.length ? "#000" : "#ccc",
                            margin: 8,
                        }}
                    />
                ))}
            </View>
        </TouchableOpacity>
    );
}