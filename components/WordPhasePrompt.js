import * as React from "react";
import { Text, View, onChangeText, StyleSheet } from 'react-native';

export default function WordPhasePrompt({ playerName, phrase }) {
    return <View style={styles.wordPhasePromptContainer}>
        <Text style={styles.wordPhasePromptPlayerText}> {playerName}</Text>
        <Text style={{ fontFamily: 'federant-regular', fontSize: 16 }}>
            choose one of your cards which best fits the phrase:
            </Text>
        <Text style={styles.wordPhasePromptPhraseText}>
            {phrase}
        </Text>
    </View>
}
const styles = StyleSheet.create({
    wordPhasePromptContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2%'

    },
    wordPhasePromptPlayerText: {
        color: 'lightgreen',
        fontSize: 45,
        paddingRight: 10,
        textAlign: 'center',
        fontFamily: 'lobster-regular'

    },
    wordPhasePromptPhraseText: {
        color: 'gold',
        fontSize: 30,
        fontFamily: 'federant-regular',
        fontWeight: 'bold'
    }
})