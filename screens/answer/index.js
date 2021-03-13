import React from 'react';
import { SafeAreaView,Text,StyleSheet } from 'react-native';

const Answer = ({navigation}) =>{
    return (
        <>
           <SafeAreaView style={styles.container}>
               <Text>answer</Text>
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
  export default Answer;