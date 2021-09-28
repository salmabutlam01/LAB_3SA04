import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Forecast from "./Forecast";
//import { StyleSheet } from "react-native";
export default class Weather extends React.Component {
    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
            .then((response) => response.json())
            .then((json) => {
                this.setState(
                    {
                        forecast: {
                            main: json.weather[0].main,
                            temp: json.main.temp,
                            humidity: json.main.humidity,
                            province: json.name,
                        }
                    });
            })
            .catch((error) => {
                console.warn(error);
            });
    }
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: '-', province: '-', temp: 0 ,  humidity: 0
            }
        }
    }
    componentDidMount = () => this.fetchData()
    componentDidUpdate = (prevProps) => {
        if (prevProps.zipCode !== this.props.zipCode) {
            this.fetchData()
        }
    }

    render() {
        return (
            <View style={[styles.container, {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: "column"
              }]}>
                <ImageBackground source={require("../assets/bg.png")} style={styles.backdrop}>
                    <View style={[styles.textarea , {flex: 1, }]}>
                            <Text style={styles.textHeader}>{this.state.forecast.province}</Text>
                            <Text style={styles.text}>Zip code is {this.props.zipCode}.</Text>
                    </View>
                    <View style={{ flex: 3, alignItems:"center"}}>
                        <Forecast {...this.state.forecast} />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
//height, paddingRight, backgroundColor, opacity, fontSize, color, textAlign
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
    overlay: {
        height: 400,
        paddingTop: 20,
        backgroundColor: "#000000",
        opacity: 0.5,
        textAlign: "center",
    },
    textHeader: {
        fontSize: 40,
        fontWeight: "bold",
        color: '#FFFFFF',
        textAlign: "center",
        textTransform: 'uppercase',
    },
    text: {
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: "center",
    }
});
