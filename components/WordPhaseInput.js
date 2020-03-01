import * as React from "react";
import { TextInput, Text, View, onChangeText, StyleSheet } from 'react-native';

export default function WordPhaseInput({ playerName, onChange }) {
    return <View style={styles.wordPhaseInputContainer}>
        <Text style={styles.wordPhaseInputPlayerText}>
            {playerName}
        </Text>
        <Text style={styles.wordPhaseText}>Choose your card and a short phrase to describe it
         </Text>
        <TextInput style={styles.wordPhaseInputPhraseText}
            onChangeText={onChange}
            placeholder='Type Here'>
        </TextInput>
    </View>
}

const styles = StyleSheet.create({
    wordPhaseInputContainer: {
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        fontSize: 30,
    },
    wordPhaseInputPlayerText: {
        color: 'blue',
        padding: 5,
        fontSize: 40
    },
    wordPhaseInputPhraseText: {
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 30,
        padding: 5,
    },
    wordPhaseText: {
        fontSize: 20,
        textAlign: 'center',
    }
})