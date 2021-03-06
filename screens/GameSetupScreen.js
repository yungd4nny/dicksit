import * as React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import TabBarIcon from '../components/TabBarIcon';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import imgurls from '../assets/imgurls';
import Colors from '../constants/Colors';
import { Form, TextInput } from 'react-native-autofocus'

export default class GameSetupScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerNames: [],
            numPlayers: 0,
        };
    }

    updatePlayerName = (index, name) => {
        let names = this.state.playerNames;
        names[index] = name;
        let num = this.state.playerNames.filter(String).length;
        this.setState({ playerNames: names })
        this.setState({ numPlayers: num })
    }

    startGame = (num, names) => {
        if (this.state.numPlayers > 0) {
            gameData = {
                numPlayers: this.state.numPlayers,
                playerNames: this.state.playerNames.filter(String),
                playerScores: new Array(this.state.playerNames.filter(String).length).fill(0),
                playerWord: '',
                roundNum: 0,
                chosenImages: new Array(this.state.playerNames.filter(String).length),
                wordPlayer: 1,
                votedImages: new Array(this.state.playerNames.filter(String).length - 1),
                scoreLimit: 10,
                playerDecks: new Array(this.state.playerNames.filter(String).length).fill(new Array(6).fill('')),
            };
            gameData.playerDecks.forEach((deck, deckIndex) => {
                deck.forEach((card, cardIndex) => {
                    console.log('ligma');
                    j = Math.floor(Math.random() * imgurls.length)
                    gameData.playerDecks[deckIndex][cardIndex] = imgurls[j]
                    console.log(imgurls[j])

                })
            });
            this.props.navigation.navigate('WordPhase', { gameData: gameData })
        }
        else {
            Alert.alert('Please add players to start a game!');
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <Text style={styles.title}>Who's playing?</Text>
                    <Form>
                        {
                            [0, 1, 2, 3, 4, 5].map((n) =>
                                <TextInput
                                    key={n}
                                    style={[styles.textInputs, { flex: 1, color: 'white', backgroundColor: Colors.playerColors[n] }]}
                                    placeholder={'Set Player ' + n + ' Name'}
                                    placeholderTextColor='lightgrey'
                                    onChangeText={(text) => { this.updatePlayerName(+n - 1, text) }}
                                    value={this.state.playerNames[+n - 1]}
                                />
                            )
                        }
                    </Form>
                </ScrollView>
                <TouchableOpacity
                    style={styles.arrow}
                    onPress={this.startGame}
                >
                    <TabBarIcon style={styles.arrow} name="md-arrow-round-forward" />
                </TouchableOpacity>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    arrow: {
        alignSelf: 'flex-end',
        padding: 15,
    },
    title: {
        fontSize: 45,
        padding: 10,
        textAlign: 'center',
    },
    textInputs: {
        fontSize: 28,
        padding: 10,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    contentContainer: {
        paddingTop: 15,
    },
    optionIconContainer: {
        marginRight: 12,
    },
    option: {
        backgroundColor: '#fdfdfd',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: 0,
        borderColor: '#ededed',
    },
    lastOption: {
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    optionText: {
        fontSize: 15,
        alignSelf: 'flex-start',
        marginTop: 1,
    },
});
