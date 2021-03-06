import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MonoText } from '../components/StyledText';
import imgurls from '../assets/imgurls';

export default function HomeScreen({ navigation }) {

  let demoGameData = {
    numPlayers: 3,
    playerNames: ['David', 'Danny', 'Waka'],
    playerScores: [0, 0, 0],
    playerWord: '',
    roundNum: 1,
    chosenImages: [, ,],
    wordPlayer: 1,
    votedImages: [, ,],
    scoreLimit: 10,
    playerDecks: new Array(3).fill(new Array(6).fill('')),
  };

  demoGameData.playerDecks.forEach((deck, deckIndex) => {
    deck.forEach((card, cardIndex) => {
      console.log('ligma');
      let j = Math.floor(Math.random() * imgurls.length);
      demoGameData.playerDecks[deckIndex][cardIndex] = imgurls[j];
      console.log(imgurls[j])

    })
  });
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Image
          source={{
            uri:
              'https://f4.bcbits.com/img/a1976873474_10.jpg'
          }}
          style={styles.welcomeImage}
        />
      </View>

      <Button
        title="Go to SetupScreen"
        onPress={() => navigation.navigate('GameSetup', { name: 'Jane' })}
      />
      <Button
        title="Go to WordPhase"
        onPress={() => navigation.navigate('WordPhase', { gameData: demoGameData })}
      />
      <Button
        title="Go to ChoosePhase"
        onPress={() => navigation.navigate('ChoosePhase', { gameData: demoGameData })}
      />
      <Button
        title="Go to VotePhase"
        onPress={() => navigation.navigate('VotePhase', { name: 'Jane' })}
      />
      <Button
        title="Go to ResultPhase"
        onPress={() => navigation.navigate('ResultPhase', { name: 'Jane' })}
      />
      <Button
        title="Go to WinScreen"
        onPress={() => navigation.navigate('WinScreen', { name: 'Jane' })}
      />

      <View>
        <Text style={{ fontSize: 100, fontFamily: 'lobster-regular', color: 'lightblue', alignSelf: 'center' }}>
          Dicksit
      </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('GameSetup', { name: 'Jane' })}>

        <View style={styles.peepeecontainer}>
          <Icon name="play" size={50} color='lightblue'>

          </Icon>


        </View>
      </TouchableOpacity>




    </View >
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  peepeecontainer: {
    paddingLeft: 35,
    padding: 30,
    borderWidth: 5,
    borderColor: 'lightblue',
    borderRadius: 150,
    width: '40%',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
