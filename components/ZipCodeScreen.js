import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableHighlight, ImageBackground } from 'react-native';

const availableZipItems = [
  { place: 'Hatyai', code: '90110' },
  { place: 'Trang', code: '92000' },
  { place: 'Chiangmai', code: '50000' },
  { place: 'Khonkaen', code: '40000' },
  { place: 'Bangkok', code: '10100' },
]
const ZipItem = ({place, code, navigate}) => (
  <TouchableHighlight onPress={() => navigate('Weather', {zipCode: code })}>
    <View style={styles.zipItem}>
      <Text style={styles.zipPlace}>{place}</Text>
      <Text style={styles.zipCode}>{code}</Text>
    </View>
  </TouchableHighlight>
)
const _keyExtractor = item => item.code

export default class WeatherScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
        headerTitle:  () => (<Text style={{ fontSize: 24, fontWeight: 'bold', color: '#FFFFFF'}}>Choose a zip code</Text>),
        headerStyle: {  
              backgroundColor: '#007AFF',
            }, 
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ImageBackground source={require("../assets/bg.png")} style={styles.backdrop}>
        <FlatList
          data={availableZipItems}
          keyExtractor={_keyExtractor}
          renderItem={({item}) => <ZipItem {...item} navigate={navigate}/>}
        />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
textarea: {
    justifyContent: "center", 
    alignItems: "center",
},
backdrop: {
    width: '100%',
    height: '100%'
},
  zipItem: {
    flexDirection: 'row',
    margin: 20
  },  
  zipPlace: {
    color:"white",
    flex: 1,
    fontSize: 24, textAlign: 'center'
    
  },  
  zipCode: {   
    color:"white",
    flex: 1 ,
    fontSize: 24, textAlign: 'center'
  }
});
