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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: 25,
        height: undefined,
        zIndex: 999
    },

    text: {
        fontSize: 12
    }

})