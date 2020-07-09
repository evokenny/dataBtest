
import { TouchableOpacity, StyleSheet, Text, View, TextInput, ImageBackground, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import myApi from "./API.js";

export default function WriteNews({ navigation }) {

    const [title, setTitle] = useState('title');
    const [news, setNews] = useState('news');
    return (
            <View style={styles.container}>
                <Text>enter the title: </Text>
                <TextInput

                    style={styles.input}
                    placeholder='Another news'
                    onChangeText={(val) => setTitle(val)}
                />
                <Text>Enter the news: </Text>
                <TextInput
                    style={styles.input}
                    multiline
                    placeholder='write your news here'
                    onChangeText={(val) => setNews(val)}
                />

                <TouchableOpacity
                    onPress={() =>myApi.request("/api/TestNews","POST" , { title: title, news: news }) }
                    style={styles.opacityStyle}>
                    <Text style={styles.opacityStyle}>post</Text>
                </TouchableOpacity>
                               
                <TouchableOpacity onPress={() => navigation.navigate('ShowNews')}>
                    <Text>Press here to see the news</Text>
                </TouchableOpacity>


            </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderBottomColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    },
    opacityStyle: {
        backgroundColor: '#0AF50A',
        fontSize: 20,
        color: '#000000',
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});



