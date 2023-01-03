import {useFocusEffect} from '@react-navigation/core';
import React, {useCallback, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from '@emotion/native';

export default function Movies({navigation: {navigate}}) {
  useEffect(() => {
    console.log('마운트');
    return () => {
      console.log('언마운트');
    };
  }, []);

  useFocusEffect(
    useCallback(() => {
      console.log('Focus');
      return () => {
        console.log('Blur');
      };
    }, [])
  );
  return (
    <View>
      <SectionTitle>Movies</SectionTitle>
      <TouchableOpacity
        onPress={() => navigate('Stacks', {screen: 'one', params: {id: 123}})}
      >
        <Text>Go To One Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const SectionTitle = styled.Text`
  font-size: 30px;
  color: ${props => props.theme.title}
`;
