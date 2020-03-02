import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import WordPhasePrompt from '../components/WordPhasePrompt';

export default function ChoosePhaseScreen({ navigation, route }) {
  let gameData = route.params.gameData;

  return (
    <View style={styles.container}>
      <View>
        <WordPhasePrompt playerName={gameData.playerNames[0]} phrase={gameData.playerWord}>
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
