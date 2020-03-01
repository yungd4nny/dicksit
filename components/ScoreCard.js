import * as React from 'react';
import Colors from '../constants/Colors';
import { Text, StyleSheet, View } from 'react-native';
var val = 19;


export function  ScoreCard(props) {

      return (



        <View style={styles.container}>
        <View style = {styles.labelcontainer}>
        <Text style = {[styles.label, {width: 300}]}>
            Current Scores
        </Text>
        <Text style = {[styles.label, {width: 100}]}>
            Round Number
        </Text>
        </View>
        <View style = {styles.sqcontainer}>
          {
            prop[playerScores].map(function(val, ind){
              return (
                <View style = {[styles.sq, {width: 300/GameData.scores.length, backgroundColor: GameData.colors[ind]}]}>
                  <Text style = {styles.text}>
                    {val}
                  </Text>
                </View>
              )
            })
          }
          <View style = {[styles.sq, {width: 100}}>
            <Text style = {[styles.text, {color: 'black'}]}>
              {prop.roundNum}
          </View>
        </View>
        </View>
      );

};


const styles = StyleSheet.create({

  container: {
    left: 0,
    top: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    width: 300,
    height: 70


  },
  labelcontainer: {
    left: 0,
    top: 0,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    width: 400,
    height: 10


  },
  sqcontainer: {
    left: 0,
    top: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    width: 200,
    height: 0


  },
  sq: {
    width: 60,
    height: 60,
    top: 0,
    left: 0,
    backgroundColor: '#00BCD4',
    textAlign: 'center',
    alignItems: 'center'
  },
  text:
  {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 50
  },
  label:
  {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
    lineHeight: 10
  }
});
var GameData = {
  scores: [0, 4, 8, 9],
  colors: ['red', 'blue,', 'green', 'black']
};
