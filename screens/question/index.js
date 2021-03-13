import React, {useState} from 'react';
import { SafeAreaView,Text,StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Question = ({navigation}) =>{
    const [text, setText] = useState('');
    return (
        <>
           <SafeAreaView style={styles.container}>
               <TextInput style={styles.tInput} multiline={true} placeholder={'Enter the Question'}  autoCorrect={true}  onChangeText={text => setText(text)}></TextInput>
               <Button color={'#30475e'}
                        title="Submit"
                        onPress={()=>navigation.navigate('Answer', {que: {text}, ans: "tanda tanda daa"})} 
                    />
           </SafeAreaView>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dddddd',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tInput:{
        borderWidth: 1,
        borderRadius: 20,
        width: 300,
        height: 120,
        padding: 5,
        margin: 20,
        textAlign: 'center',
        overflow: 'visible',
    },
  });
  
  export default Question;