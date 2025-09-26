import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from './screens/AllPlaces';
import AddPlaces from './screens/AddPlaces';
import IconButton from './components/UI/IconButton';
import Colors from "./constants/colors";
import Map from "./screens/Map";
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import init from './utils/database';
import AppLoading from 'expo-app-loading';
 
const Stack = createNativeStackNavigator();
export default function App() {
  const [dbinitialized, setDbInitialized] = useState(false);

  useEffect(()=>{
    init().then(()=>{
      console.log("Connected");
      setDbInitialized(true);      
    }).catch((err)=>{
      setDbInitialized(false);      
    });
    
  }, []);

  if (!dbinitialized) {
    return <AppLoading />
  }
  return (
    <NavigationContainer>
      <StatusBar style='light' animated/>
      <Stack.Navigator screenOptions={{
        headerStyle: {backgroundColor: Colors.primary700},
        headerTintColor: Colors.gray700,
        contentStyle: {backgroundColor: Colors.gray700}
      }}>
        <Stack.Screen name='AllPlaces' component={AllPlaces} options={({navigation})=>({
          headerRight: ({tintColor})=>(
            <IconButton icon={"add"} color={tintColor} onPress={()=>navigation.navigate("AddPlace")} size={32}/>
          )
        })}/>
        <Stack.Screen name='AddPlace' component={AddPlaces} options={{
          title: "Add Place"
        }}/>
        <Stack.Screen name='Map' component={Map} options={{
          title: "Map Preview"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

