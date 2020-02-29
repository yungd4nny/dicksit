import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WinScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.wordMa}>
        WinScreen
      </Text>
    </View >
  );
}

WinScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  wordMa: {
    fontSize: 20,
  }
});