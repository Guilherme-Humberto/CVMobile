import React, { useEffect } from 'react';
import { AsyncStorage } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign'

// Importando os componentes
import Initial from './_Initial/index'
import Locals from './_Locals/index'
import Historic from './_Historic/index'
import Campaings from './_Campaings/index'
import Infos from './_UserInfos/index'

const Tab = createBottomTabNavigator();


const UserPage = ({ navigation }) => {
    useEffect(() => {
        async function verifyData() {
            if(!await AsyncStorage.getItem("infos")) {
                navigation.navigate("Main")
            }
        }
        verifyData()
    }, [])
// Configurando tema para a página de navegação
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#eee',
    },
  };
    return (
        <>
            <NavigationContainer theme={MyTheme}>
                <Tab.Navigator 
                initialRouteName={"Home"}
                // Definindo Icons para os titulos das tabs
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Home') {
                                iconName = focused
                                    ? 'home'
                                    : 'home';
                            } else if (route.name === 'Locals') {
                                iconName = focused ? 'enviromento' : 'enviromento';

                            } else if (route.name === 'Historic') {
                                iconName = focused ? 'form' : 'form';
                                
                            } else if (route.name === 'Campaings') {
                                iconName = focused ? 'addusergroup' : 'addusergroup';

                            } else if (route.name === 'Infos') {
                                iconName = focused ? 'user' : 'user';
                            }
                            return <Icon name={iconName} size={size} color={color} />;
                        },
                    })}
                    // Definico tomato quando tab ativa
                    // Definico gray quando tab inativa
                    tabBarOptions={{
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray',
                    }}
                >
                    {/* Montando as Tabs */}
                    <Tab.Screen name="Locals" component={Locals} />
                    <Tab.Screen name="Historic" component={Historic} />
                    <Tab.Screen name="Home" options={({ navigation }) => ({ teste: () => navigation.navigate("Main") })} component={Initial} />
                    <Tab.Screen name="Campaings" component={Campaings} />
                    <Tab.Screen name="Infos" component={Infos} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
}

export default UserPage;