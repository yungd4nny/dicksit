import * as React from "react";
import {Text, View,onChangeText, StyleSheet} from 'react-native';

export default function VotePrompt({playerName,phrase, wordPlayer}){
    return<View style={styles.VotePromptContainer}>
         <Text style={styles.votePromptPlayerText}> {playerName}</Text>
            <Text>
            pick the card <Text style={styles.votePromptWordPlayerText}>{wordPlayer}</Text> chose that best fits the phrase:
            </Text>
         <Text style={styles.votePromptPhraseText}>
             {phrase}
         </Text>
    </View>
}
const styles = StyleSheet.create({
    VotePromptContainer: {
      alignSelf: 'center',
      borderWidth: 1,
      borderColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',

    },
    votePromptPlayerText: {
        color: 'blue',
        fontSize: 20
    },
    votePromptWordPlayerText: {
        color: 'red'
    },
    votePromptPhraseText: {
        fontSize: 20
    }
})