import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import { temaKpop } from './src/theme/tema';
import { ListaProvider } from './src/context/ListaContext';
import ExplorarScreen from './src/screens/ExplorarScreen';
import DetalhesScreen from './src/screens/DetalhesScreen';
import MinhaListaScreen from './src/screens/MinhaListaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={temaKpop}>
      <StatusBar barStyle="light-content" />
      <ListaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: temaKpop.colors.background },
            }}
          >
            <Stack.Screen name="Explorar" component={ExplorarScreen} />
            <Stack.Screen name="Detalhes" component={DetalhesScreen} />
            <Stack.Screen name="MinhaLista" component={MinhaListaScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ListaProvider>
    </PaperProvider>
  );
}
