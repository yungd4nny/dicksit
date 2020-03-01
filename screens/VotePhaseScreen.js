import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import VotePrompt from '../components/VotePrompt';
import { ScoreCard } from '../components/ScoreCard';

export default function VotePhaseScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScoreCard/>
      <View>
        <VotePrompt playerName={'Jenny'} phrase={'destiny'} wordPlayer={'David'}>
        </VotePrompt>
    </View>
    </View >
  );
}

VotePhaseScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  wordMa: {
    fontSize: 20,
  }
});
