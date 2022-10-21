import { MapsScreen, NewPlaceScreen, PlaceDetailScreen, PlaceListScreen } from "../screens/index";
import { Platform, Text, TouchableOpacity } from "react-native";

import IonicIcons from "@expo/vector-icons/Ionicons";
import React from "react";
import colors from "../utils/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const PlacesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Place"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Stack.Screen
        name="Places"
        component={PlaceListScreen}
        options={({ navigation }) => ({
          title: "Personas",
          headerRight: () => (        
            <TouchableOpacity onPress={() => navigation.navigate("NewPlace")}>
              <IonicIcons name="add-circle-outline" size={14} color={colors.white} >Nueva persona</IonicIcons>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="PlaceDetail"
        component={PlaceDetailScreen}
        options={{ title: "Detalles de la dirección" }}
      />
      <Stack.Screen
        name="NewPlace"
        component={NewPlaceScreen}
        options={{ title: "Nueva dirección" }}
      />
      <Stack.Screen name="Maps" component={MapsScreen} options={{ title: "Mapa" }} />
    </Stack.Navigator>
  );
};

export default PlacesNavigator;
