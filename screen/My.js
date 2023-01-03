import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function My({navigation: {reset, navigate}}) {
  return (
    <View>
      <Text>My</Text>
      <TouchableOpacity
        onPress={() =>
          reset({
            index: 0,
            routes: [
              {
                name: 'Stacks',
                params: {
                  screen: 'two',
                },
              },
            ],
          })
        }
      >
        <Text>Try unmounting</Text>
      </TouchableOpacity>
    </View>
  );
}
