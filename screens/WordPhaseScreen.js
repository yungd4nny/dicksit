import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import WordPhaseInput from '../components/WordPhaseInput';
import TabBarIcon from '../components/TabBarIcon';


export default function WordPhaseScreen({ navigation, route }) {


  updateWord = (newWord) => {
    route.params.gameData.playerWord = newWord;
  }

  nextTurn = () => {
    if (route.params.gameData.playerWord) {
      navigation.navigate('ChoosePhase', { gameData: route.params.gameData })
    } else {
      Alert.alert('Please type something!');
    }
  }

  return (
    <View style={styles.container}>
      <View>
        {/* <Text>{JSON.stringify(route.params.gameData)}</Text> */}
        <WordPhaseInput
          playerName={route.params.gameData.playerNames[route.params.gameData.wordPlayer]}
          onChange={(text) => { updateWord(text) }}>
        </WordPhaseInput>
      </View>
      <View>
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
  wordMa: {
    fontSize: 20,
  },
  arrow: {
    alignSelf: 'flex-end',
    padding: 15,
  },
});
