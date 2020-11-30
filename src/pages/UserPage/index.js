import React from "react";
import { AsyncStorage } from "react-native";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Feather";

// Importando os componentes
import Initial from "./_Initial/index";
import Locals from "./_Locals/index";
import Historic from "./_Historic/index";
import Campaings from "./_Campaings/index";

const Tab = createBottomTabNavigator();

const UserPage = ({ navigation }) => {
  const logout = async () => {
    await AsyncStorage.removeItem("infos");
    navigation.navigate("Main");
  };

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={"Home"}
          // Definindo Icons para os titulos das tabs
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home";
              } else if (route.name === "Locals") {
                iconName = focused ? "enviromento" : "enviromento";
              } else if (route.name === "Historic") {
                iconName = focused ? "form" : "form";
              } else if (route.name === "Campaings") {
                iconName = focused ? "addusergroup" : "addusergroup";
              } else if (route.name === "Infos") {
                iconName = focused ? "user" : "user";
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          // Definico tomato quando tab ativa
          // Definico gray quando tab inativa
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          {/* Montando as Tabs */}
          <Tab.Screen name="Home" component={Initial} />
          <Tab.Screen name="Campaings" component={Campaings} />
          <Tab.Screen name="Historic" component={Historic} />
          <Tab.Screen name="Locals" component={Locals} />
          <Tab.Screen
            name="Button"
            options={{
              tabBarButton: () => (
                <ButtonModalNav onPress={logout}>
                  <Icon2 name="log-out" color="#fff" size={30} />
                </ButtonModalNav>
              ),
            }}
            component={Initial}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default UserPage;

const ButtonModalNav = styled.TouchableOpacity`
  right: 10px;
  bottom: 30px;
  width: 60px;
  height: 60px;
  elevation: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background: #e26868;
`;
