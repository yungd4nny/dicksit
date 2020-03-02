import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import WordPhasePrompt from '../components/WordPhasePrompt';
import CardPicker from '../components/CardPicker';

export default function ChoosePhaseScreen({ navigation, route }) {
  let gameData = route.params.gameData;
  let choosePlayer = gameData.wordPlayer;

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <WordPhasePrompt playerName={gameData.playerNames[0]} phrase={gameData.playerWord}>
        </WordPhasePrompt>
      </View>
      <View style={{ flex: 4, backgroundColor: 'red' }}>
        <CardPicker
          deck={gameData.playerDecks[choosePlayer]}
          onCardSelect={(url, index) => {
            gameData.chosenImages[choosePlayer] = gameData.playerDecks[choosePlayer][index];
            console.log(`${gameData.playerNames[choosePlayer]} chose ${url}`);
          }}
        />
      </View>
      <View style={{ flex: 1 }}>

      </View>
    </View >
  );
}

ChoosePhaseScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  wordMa: {
    fontSize: 20,
  }
});
