import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WordPhaseScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.wordMa}>
        Word Phase Screen
      </Text>
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
