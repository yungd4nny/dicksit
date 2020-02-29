import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function WinScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.wordMa}>
<Text style={styles.winnerText}>Player 1</Text>
        {"\n"}You Win!!
      </Text>
      <View>
        <Image
          source={{
            uri:
              'https://i.ya-webdesign.com/images/big-chungus-clipart-dance-gif-6.gif'
          }}
          style={{
            display: 'flex',
            width: 375,
            height: 350,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            marginVertical: '-20%'
          }}
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
    fontSize: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginVertical: '30%',
    padding: 5,
  },
  winnerText: {
    fontFamily: 'lobster-regular',
    display: 'flex',
    fontSize: 120,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    color: 'blue'
  }
});
