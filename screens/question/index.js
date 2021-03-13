import React from 'react';
import { SafeAreaView,Text,StyleSheet } from 'react-native';

const Question = ({navigation}) =>{
    return (
        <>
           <SafeAreaView style={styles.container}>
               <Text>Question</Text>
           </SafeAreaView>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff4',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default Question;