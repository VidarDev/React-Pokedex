import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "@/navigation/Routes";
import HomeScreen from "@/screens/HomeScreen";
import PokemonScreen from "@/screens/PokemonScreen";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={Routes.HOME_SCREEN}
        >
          <Stack.Screen
            name={Routes.HOME_SCREEN}
            component={HomeScreen}
          />
          <Stack.Screen
            name={Routes.POKEMON_SCREEN}
            component={PokemonScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigator;
