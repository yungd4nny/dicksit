import * as React from "react"
import { Text, View, StyleSheet } from 'react-native';

export default function RoundTracker(props) {
    return (
        <View style={styles.roundContainer}>
            <Text style = {styles.roundText}> Round {props.round}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    roundContainer: {
      alignSelf: 'flex-end',
      marginTop: -1,
      position: 'absolute',
      borderWidth: 1,
      borderColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',

    },
    roundText: {
        fontSize: 20
    }
})