import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
export default class Forecast extends React.Component {
    render() {
        return (
            <View style={[styles.container, {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: "column"
              }]}>
                <View style={[styles.textarea, {flex: 1, }]}>
                          <Image
                          style={styles.pix}
                          source={require("../assets/shine.png")}
                          />
                </View>
                <View style={[styles.textarea, {flex: 2, }]}>
                    <Text style={styles.bigText}>
                        {this.props.main}
                    </Text >

                    <Text style={styles.smallText}>
                        Temperature : {this.props.temp}°C
                    </Text>
                        <Text style={styles.smallText}>
                        Humidity : {this.props.humidity}%
                        </Text>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {  
        flex:1
    },
    pix: {
        width: 250,
        height: 250,
      },
    tempContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center'
    },
    bigText: {
        fontSize: 36,
        color: "#FFFFFF",
        textAlign: "center",
        fontWeight: "bold",
    },
    smallText: {
        fontSize: 24,
        color: "#FFFFFF",
        textAlign: "center"
    },
    textarea: {
        justifyContent: "center", 
        alignItems: "center",
    },
})