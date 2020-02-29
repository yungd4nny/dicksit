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
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <Text style={styles.title}>Who's playing?</Text>
                    {
                        [1, 2, 3, 4, 5, 6].map((n) =>
                            <TextInput
                                key={n}
                                style={styles.textInputs}
                                placeholder={'Player ' + n}
                                onChangeText={(text) => { this.updatePlayerName(+n - 1, text) }}
                                value={this.state.playerNames[+n - 1]}
                            />
                        )
                    }

                </ScrollView>
            </View>
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
