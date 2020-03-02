import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Image, Button, PickerIOSComponent } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import TabBarIcon from '../components/TabBarIcon';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ImgUrls from '../assets/imgurls';

export default class CardPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCard: 0,
      deck: props.deck ? props.deck : ImgUrls.slice(0, 6),
    };
    console.log(this.state.deck);
  }

  cardSelected(img_url, index) {
    console.log(img_url);
    this.setState({
      selectedCard: index,
    });
    if (this.props.onCardSelect) {
      this.props.onCardSelect(img_url, index);
    }
  }

  render() {
    return (
      <View style={styles.cardContainer}>
        {this.state.deck.map((img_url, i) => {
          return (<View key={i} onPress={() => { }}
            style={styles.imageCard}>
            <TouchableOpacity onPress={() => { this.cardSelected(img_url, i) }}>
              <Image
                key={i}
                style={{
                  width: '95%', height: '95%', borderRadius: 5, margin: 5,
                  borderColor: 'pink',
                  borderRadius: 5,
                  borderWidth: i == this.state.selectedCard ? 5 : 0
                }}
                source={{
                  uri: img_url
                }}></Image>
            </TouchableOpacity>

          </View>
          )
        })}
      </View>
    );

  }

}

const styles = StyleSheet.create({
  card: {
    width: 'flex-end',
    padding: 15,
  },
  cardContainer: {
    alignSelf: 'flex-end',
    width: '100%',
    maxHeight: '50%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  imageCard: {
    borderRadius: 10,
    marginVertical: 5,
    width: '30%',
    height: '90%',
  }
});
