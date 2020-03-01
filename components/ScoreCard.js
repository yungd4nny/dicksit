import * as React from 'react';
import Colors from '../constants/Colors';
import { Text, StyleSheet, View } from 'react-native';


export function ScoreCard(){
  return(
    <SC vals = {19}/>
  )
}

function SC(props) {

  return (
    <View style={styles.container}>
      <View style={styles.labelcontainer}>
        <Text style={[styles.label, { width: 300 }]}>
          Current Scores
        </Text>
        <Text style={[styles.label, { width: 100 }]}>
          Round Number
        </Text>
      </View>
      <View style={[styles.sqcontainer, { fontFamily: 'lobster-regular' }]}>
        {
          [0, 2, 5, 6].map(function (val, ind) {
            return (
              <View style={[styles.sq, { width: 300 / GameData.scores.length, backgroundColor: GameData.colors[ind], fontFamily: 'lobster-regular' }]}>
                <Text style={styles.text}>
                  {val}
                </Text>
              </View>
            )
          })
        }
        <View style={[styles.sq, { width: 100 }]}>
          <Text style={[styles.text, { color: 'black', fontFamily: 'lobster-regular', fontSize: 30 }]}>
            {props.vals}
            </Text>
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
    height: 70,
    fontFamily: 'lobster-regular'


  },
  labelcontainer: {
    left: 0,
    top: 0,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    width: 400,
    height: 10,
    fontFamily: 'lobster-regular'


  },
  sqcontainer: {
    left: 0,
    top: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    width: 200,
    height: 0,
    fontFamily: 'lobster-regular'



  },
  sq: {
    width: 60,
    height: 60,
    top: 0,
    left: 0,
    backgroundColor: '#00BCD4',
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'lobster-regular',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4

  },
  text:
  {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 50,
    fontFamily: 'lobster-regular'

  },
  label:
  {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
    lineHeight: 10,
    fontFamily: 'lobster-regular'

  }
});
var GameData = {
  scores: [0, 4, 8, 9],
  colors: ['#53DD6C',
    '#63A088',
    '#56638A',
    '#483A58',]
};
