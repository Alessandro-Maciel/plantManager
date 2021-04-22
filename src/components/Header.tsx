import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import AleImg from '../assets/Eu.jpg';

import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Header() {
    return (
        <View style={style.container}>
            <View>
                <Text style={style.greeting}>Olá,</Text>
                <Text style={style.userName}>Alessandro</Text>
            </View>
            <Image source={AleImg} style={style.image} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: 20,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    }
});
