import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Image, Modal } from 'react-native';
import { gStyle } from '../styles/style';
import { Ionicons } from '@expo/vector-icons'; 
import Form from './Form'

export default  function Main({ navigation }) {

    const [news, setNews] = useState([
        { name: 'Google', anons: 'Google!!!!', full:'Google is cool!', key: '1', img: 'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662__480.jpg' },
        { name: 'Apple', anons: 'Apple!!!!', full:'Apple is cool!', key: '2', img: 'https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445__480.jpg' },
        { name: 'FaceBook', anons: 'FaceBook!!!!', full:'FaceBook is cool!', key: '3', img: 'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636__480.jpg' }
    ]);

    const [modalWindow, setModalWindow] = useState(false);

    const addArticle = (article) => {
        setNews((list)=>{
            article.key = Math.random().toString();
            return [
                article,
                ...list
            ]
        })
    }

    return (
        <View style={gStyle.main}>
            <Modal style={gStyle.main} visible={modalWindow}>
                
                <View style={gStyle.main}>
                    <Ionicons name="close-circle" size={34} color="red" style={styles.iconClose}  onPress={()=>setModalWindow(false)}/>
                    <Text style={styles.title}>Form add article</Text>
                    <Form addArticle={addArticle}/>
                </View>
            </Modal>
            <Ionicons name="add-circle" size={34} color="green" style={styles.iconAdd} onPress={()=>setModalWindow(true)}/>
            <Text style={[styles.header, gStyle.title]}>Main</Text>
            <FlatList data={news} renderItem={({item}) => (
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
                    <Image style={styles.img} source={{
                        uri: item.img
                    }}/>
                    <Text style={styles.title}>{ item.name }</Text>
                    <Text style={styles.anons}>{ item.anons }</Text>
                </TouchableOpacity>
            )}/>
        </View>
    );
}

const styles = StyleSheet.create({
   
    iconAdd:{
        textAlign: 'center',
        marginBottom: 15
    },
    iconClose:{
        textAlign: 'center',
        marginBottom: 15
    },
    img:{
        width: '100%',
        height: 200
    },
    header:{
        marginBottom: 30
    },
    item:{
        width: '100%',
        marginBottom: 30 
    },
    title:{
        fontFamily: 'mt-bold',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 20,
        color: '#474747'
    },
    anons:{
        fontFamily: 'mt-light',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
        color: '#474747'
    }
  
});