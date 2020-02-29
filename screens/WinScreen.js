import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function WinScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.wordMa}>
        <Text style={styles.winnerText}>Player 1 </Text>You Win!!
      </Text>
      <View>
      <Image
          source={{
            uri:
            'https://i.imgur.com/baOJsZ4.png'
          }}
        style={{width: 150, height: 100, alignSelf: 'center'}} 
        />
    </View>
    </View >
  );
}

WinScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({

  wordMa: {
    fontFamily: 'lobster-regular',
    fontSize: 20,
    alignSelf: 'center'
  },
  winnerText: {
    color: 'blue',
  }
});
