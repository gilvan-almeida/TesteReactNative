import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomePage } from "../pages/HomePage";
import { FavoritasPage } from "../pages/FavoritePage";
import { AppProvider } from "../context/TaskContext";

const Tab = createBottomTabNavigator();

export function AppRouter(){
    return(
        <AppProvider>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomePage}/>
                <Tab.Screen name="favoritos" component={FavoritasPage}/>
            </Tab.Navigator>
        </AppProvider>
    )
}