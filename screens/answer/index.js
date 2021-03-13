import React from 'react';
import { SafeAreaView,Text,StyleSheet } from 'react-native';

const Answer = ({route, navigation}) =>{
    const { que, ans } = route.params;
    return (
        <>
           <SafeAreaView style={styles.container}>
               <Text>Que {JSON.stringify(que.text)}</Text>
               <Text>ans {JSON.stringify(ans)}</Text>
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
  });
  export default Answer;