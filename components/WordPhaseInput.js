import * as React from "react";
import { TextInput, Text, View, onChangeText, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default function WordPhaseInput({ gameData, onChange }) {
    return (
        <View style={styles.wordPhaseInputContainer}>
            <View
                style={{ width: '100%', color: Colors.playerColors[gameData.wordPlayer] }}>
                <Text style={[styles.wordPhaseInputPlayerText, { color: Colors.playerColors[gameData.wordPlayer] }]}>
                    {gameData.playerNames[gameData.wordPlayer]}
                </Text>
            </View>
            <Text style={styles.wordPhaseText}>Choose your card and a short phrase to describe it
         </Text>
            <TextInput style={[styles.wordPhaseInputPhraseText]}
                onChangeText={onChange}
                placeholder='Type Here'>
            </TextInput>
        </View>)
}

const styles = StyleSheet.create({
    wordPhaseInputContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        fontSize: 30,
        width: '100%'
    },
    wordPhaseInputPlayerText: {
        padding: 5,
        fontSize: 40,
        width: '100%',
        textAlign: 'center',
        color: 'black',
    },
    wordPhaseInputPhraseText: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        fontSize: 30,
        padding: 5,
        width: '100%',
        textAlign: 'center'
    },
    wordPhaseText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
})