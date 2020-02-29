import * as React from "react";
import {Text, View,onChangeText, StyleSheet} from 'react-native';

export default function WordPhasePrompt({playerName,phrase}){
    return<View style={styles.wordPhasePromptContainer}>
         <Text style={styles.wordPhasePromptPlayerText}> {playerName}</Text>
            <Text>
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
      borderWidth: 1,
      borderColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',

    },
    wordPhasePromptPlayerText: {
        color: 'blue'
    },
    wordPhasePromptPhraseText: {
        fontSize: 20
    }
})