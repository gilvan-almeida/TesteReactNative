import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "../pages/HomePage";
import { FavoritasPage } from "../pages/FavoritePage";
import { AppProvider } from "../context/TaskContext";
import { CreateTaskPage } from "../pages/CreateTaskPage";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigation(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage}/>
            <Tab.Screen name="favoritos" component={FavoritasPage}/>
        </Tab.Navigator>
    )
}


export function AppRouter(){
    return(
        <AppProvider>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Tab" component={TabNavigation}/>
                <Stack.Screen name="CreateTask" component={CreateTaskPage}/>
            </Stack.Navigator>
        </AppProvider>
    )
}