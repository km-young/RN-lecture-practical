import {StatusBar} from 'expo-status-bar';
import {useColorScheme} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import Stacks from './navigation/Stacks';
import Tabs from './navigation/Tabs';
import Root from './navigation/Root';
import {ThemeProvider} from '@emotion/react';
import {darkTheme, lightTheme} from './theme';

export default function App() {
  const isDark = useColorScheme() === 'dark';
  console.log('App:isDark', isDark);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
}
