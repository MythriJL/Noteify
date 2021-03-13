import React, {useState} from 'react';
import { SafeAreaView,Text,StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Question = ({navigation}) =>{
    const [text, setText] = useState('');
    return (
        <>
           <SafeAreaView style={styles.container}>
               <TextInput style={styles.tInput} placeholder={'Enter the Question'} autoCorrect={true}  onChangeText={text => setText(text)}></TextInput>
               <Button
                        title="Submit"
                        onPress={()=>navigation.navigate('Answer', {que: {text}, ans: "HEY THIS IS THE ANS"})} 
                    />
           </SafeAreaView>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tInput:{
        borderWidth: 2,
        width: 200,
        padding: 5,
        margin: 20,
        textAlign: 'center'
    },
  });
  
  export default Question;