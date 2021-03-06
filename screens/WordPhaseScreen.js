import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import WordPhaseInput from '../components/WordPhaseInput';
import TabBarIcon from '../components/TabBarIcon';
import CardPicker from '../components/CardPicker';


export default function WordPhaseScreen({ navigation, route }) {
  let gameData = route.params.gameData;
  let wordPlayer = gameData.wordPlayer;
  console.log('wordplayer=' + wordPlayer);

  let updateWord = (newWord) => {
    gameData.playerWord = newWord;
  }

  let nextTurn = () => {
    if (gameData.playerWord) {
      navigation.navigate('ChoosePhase', { gameData: gameData })
    } else {
      Alert.alert('Please type something!');
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <WordPhaseInput
          gameData={gameData}
          onChange={(text) => { updateWord(text) }}>
        </WordPhaseInput>
      </View>
      <View style={{ backgroundColor: 'red' }}>
        <CardPicker
          deck={gameData.playerDecks[wordPlayer]}
          onCardSelect={(url, index) => {
            gameData.chosenImages[wordPlayer] = gameData.playerDecks[wordPlayer][index];
            console.log(gameData);
          }}
        />
      </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={nextTurn}>
          <TabBarIcon style={styles.arrow} name="md-arrow-round-forward" />
        </TouchableOpacity>
      </View>
    </View >
  );
}

WordPhaseScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  bottomBar: {
    height: '10%',
  },
  container: {
    flex: 1,
  },
  wordMa: {
    fontSize: 20,
  },
  arrow: {
    alignSelf: 'flex-end',
    padding: 15,
  },
});
