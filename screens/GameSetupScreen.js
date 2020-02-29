import * as React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

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

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Who's playing?</Text>
                <TextInput
                    style={styles.textInputs}
                    placeholder="Player 1"
                    onChangeText={(text) => { this.updatePlayerName(0, text) }}
                    value={this.state.playerNames[0]}
                />
                <TextInput
                    style={styles.textInputs}
                    placeholder="Player 2"
                    onChangeText={(text) => { this.updatePlayerName(1, text) }}
                    value={this.state.playerNames[1]}
                />
                <TextInput
                    style={styles.textInputs}
                    placeholder="Player 3"
                    onChangeText={(text) => { this.updatePlayerName(2, text) }}
                    value={this.state.playerNames[2]}
                />
                {
                    this.state.playerNames[2] ? (<TextInput
                        style={styles.textInputs}
                        placeholder="Player 4"
                        onChangeText={(text) => { this.updatePlayerName(3, text) }}
                        value={this.state.playerNames[3]}
                    />) : null
                }
                {
                    this.state.playerNames[3] ? (<TextInput
                        style={styles.textInputs}
                        placeholder="Player 5"
                        onChangeText={(text) => { this.updatePlayerName(4, text) }}
                        value={this.state.playerNames[4]}
                    />) : null
                }
                {
                    this.state.playerNames[4] ? (<TextInput
                        style={styles.textInputs}
                        placeholder="Player 6"
                        onChangeText={(text) => { this.updatePlayerName(5, text) }}
                        value={this.state.playerNames[5]}
                    />) : null
                }
            </ScrollView>
        );

    }

}

const styles = StyleSheet.create({
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
