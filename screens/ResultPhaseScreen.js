import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ResultPhaseScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.wordMa}>
        ResultPhaseScreen
      </Text>
    </View >
  );
}

ResultPhaseScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  wordMa: {
    fontSize: 20,
  }
});
