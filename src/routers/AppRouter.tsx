import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomePage } from "../pages/HomePage";

const Tab = createBottomTabNavigator();

export function AppRouter(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage}/>
        </Tab.Navigator>
    )
}