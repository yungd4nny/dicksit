import * as React from "react";
import { Text, View, onChangeText, StyleSheet } from 'react-native';

export default function VotePrompt({ playerName, phrase, wordPlayer }) {
    return <View style={styles.VotePromptContainer}>
        <Text style={styles.votePromptPlayerText}> {playerName}</Text>
        <Text style={{ fontFamily: 'federant-regular', fontSize: 16 }}>
            pick the card <Text style={styles.votePromptWordPlayerText}>{wordPlayer}</Text> chose that best fits the phrase:
            </Text>
        <Text style={styles.votePromptPhraseText}>
            {phrase}
        </Text>
    </View >
}
const styles = StyleSheet.create({
    VotePromptContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '2%',
        width: '90%',
        height: '50%',
        fontFamily: 'federant-regular'

    },
    votePromptPlayerText: {
        color: 'lightgreen',
        fontSize: 45,
        paddingRight: 10,
        textAlign: 'center',
        fontFamily: 'lobster-regular'

    },
    votePromptWordPlayerText: {
        color: 'red',
        fontFamily: 'federant-regular'
    },
    votePromptPhraseText: {
        color: 'gold',
        fontSize: 30,
        fontFamily: 'federant-regular',
        fontWeight: 'bold'

    }
})