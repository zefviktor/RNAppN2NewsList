import React from 'react';
import { StyleSheet, View, Button, TextInput} from 'react-native';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';

export default  function Form({addArticle}){
    return (
        <View>
            <Formik initialValues={{name: '', anons: '', full: '', img: ''}} onSubmit={(velues, action)=>{
                addArticle(velues);
                action.resetForm();
            }}>
                {(props)=> (
                    <View>
                        <TextInput 
                            style={styles.input}
                            value={props.values.name} 
                            placeholder='Enter a name' 
                            onChangeText={props.handleChange('name')}
                        />
                        <TextInput
                            style={styles.input} 
                            value={props.values.anons} 
                            placeholder='Enter a anons' 
                            onChangeText={props.handleChange('anons')}
                        />
                        <TextInput 
                            style={styles.input}   
                            value={props.values.full} 
                            multiline
                            placeholder='Enter a full' 
                            onChangeText={props.handleChange('full')}
                        />
                        <TextInput
                            style={styles.input} 
                            value={props.values.img} 
                            placeholder='Enter a img' 
                            onChangeText={props.handleChange('img')}
                        />
                        <Button title='Add' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        marginTop: 15,
        padding: 15,
        borderColor: 'silver',
        borderRadius: 5
    }
});
