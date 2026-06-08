import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomePage } from "../pages/HomePage";
import { AppProvider } from "../context/TaskContext";

const Tab = createBottomTabNavigator();

export function AppRouter(){
    return(
        <AppProvider>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomePage}/>
            </Tab.Navigator>
        </AppProvider>
    )
}