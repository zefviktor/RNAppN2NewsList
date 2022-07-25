import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { gStyle } from '../styles/style';

export default  function Contacts({route}){
    return (
        <View style={gStyle.main} >
              <Image style={styles.img} source={{
                        uri: route.params.img
                    }}/>
            <Text style={[gStyle.title, styles.header]}>{route.params.name}</Text>
            <Text style={styles.full}>{route.params.full}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        fontSize: 25,
        marginTop: 25
    },
    img:{
        width: '100%',
        height: 200
    },
    full:{
        fontFamily: 'mt-light',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
        color: '#f55151'
    }
});
