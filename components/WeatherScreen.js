import React from 'react';
import { View, Text, Button, StyleSheet, TouchableHighlight } from 'react-native';  
import Weather from './Weather';

export default class WeatherScreen extends React.Component {  
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle:  () => (<Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 'bold', color: '#FFFFFF'}}>WEATHER FORECAST</Text>),
            headerStyle: {  
              backgroundColor: '#007AFF',
            },  
            button: () => (
                <Button 
                    title="Change zip"
                    color="#f194ff"
                    onPress={() => navigation.navigate('ZipCode')}
                />
            )
        }
    }

    render() {
      const zipCode = this.props.navigation.getParam('zipCode')
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>  
            <Weather zipCode={zipCode}/>
            <View style={styles.container}>
            <Button style={styles.btnSize} 
                title="Change zipCODE"
                color="#007AFF"
                onPress={() => this.props.navigation.push('ZipCode')}
            />
            </View>
        </View>  
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: 'center',
    backgroundColor: '#007AFF',
  },
    btnSize:{
        width:"100%",   
    }
})
