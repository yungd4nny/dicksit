import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import WordPhaseInput from '../components/WordPhaseInput';

export default function WordPhaseScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>  
        <WordPhaseInput playerName={'Jenny'} onChange={(text)=>console.log(text)}>
        </WordPhaseInput>
    </View>
    </View >
  );
}

WordPhaseScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  wordMa: {
    fontSize: 20,
  }
});
