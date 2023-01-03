import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const One = ({ route: { params }, navigation: { navigate } }) => {
  console.log('params:', params)
  return (
    <TouchableOpacity onPress={() => navigate('two')}>
      <Text>One</Text>
    </TouchableOpacity>
  );
};

const Two = ({navigation: {navigate, setOptions}}) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigate('three')}>
        <Text>Two</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setOptions({
        title:'변경된 제목~',
      })}>
        <Text>Set Options</Text>
      </TouchableOpacity>
    </>
  );
};

const Three = ({navigation: {goBack, reset}}) => {
  return (
    <>
      <TouchableOpacity onPress={() => goBack()}>
        <Text>Three</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          reset({
            index: 0,
            routes: [{name: 'two'}],
          })
        }
      >
        <Text>Reset Navigation</Text>
      </TouchableOpacity>
    </>
  );
};
export default function Stacks() {
  return (
      <Stack.Navigator screenOptions={{
        headerTintColor: 'red',
      }}>
        <Stack.Screen name='one' component={One} />
        <Stack.Screen name='two' component={Two} />
        <Stack.Screen options={{
          presentation: 'modal'
        }} name='three' component={Three} />
      </Stack.Navigator>

  );
}
