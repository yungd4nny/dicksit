import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import WordPhasePrompt from '../components/WordPhasePrompt';

export default function ChoosePhaseScreen({ navigation }) {
  return (
    <View style={styles.container}>
       <View>  
        <WordPhasePrompt playerName={'Jenny'} phrase={'destiny'}>
        </WordPhasePrompt>
    </View>
    </View >
  );
}

ChoosePhaseScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  wordMa: {
    fontSize: 20,
  }
});
