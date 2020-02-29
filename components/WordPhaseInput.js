import * as React from "react";
import {TextInput, Text, View,onChangeText, StyleSheet} from 'react-native';

export default function WordPhaseInput({playerName,onChange}){
    return<View style={styles.wordPhaseInputContainer}>
         <Text style={styles.wordPhaseInputPlayerText}> 
         {playerName} 
         </Text>
         <Text>choose your card and a short phrase to describe it
         </Text>
         <TextInput style={styles.wordPhaseInputPhraseText} 
         onChangeText={onChange}>
             Type Here
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

    },
    wordPhaseInputPlayerText: {
        color: 'blue'
    },
    wordPhaseInputPhraseText: {
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 20,
    }
})