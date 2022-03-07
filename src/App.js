import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
    return (
        <SafeAreaView style={style.container}>
            <Text style={style.numero}>0</Text>
            <TouchableOpacity>
                <Text>Gerar Número</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FF0000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numero: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    botao: {
        backgroundColor: '#FFFFFF',
        width: '80%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    }
})

export default App;