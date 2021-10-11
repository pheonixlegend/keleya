import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'

export default class ImageHeader extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/authentication-background-image.jpg')}
                    resizeMode='contain'
                />
                <Text style={styles.text}>
                    Title_Page1
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: 50,
        height: undefined,
    },

    text: {
        fontSize: 12
    }

})