import React from 'react';
import { SafeAreaView,Text,StyleSheet } from 'react-native';

const Answer = ({route, navigation}) =>{
    const { que, ans } = route.params;
    return (
        <>
           <SafeAreaView style={styles.container}>
               <Text style={{marginTop:80, marginLeft:20, fontWeight: 'bold', textAlign:'left', fontSize:20}}>Question</Text>
               <Text style={styles.queStyle}>{JSON.parse(JSON.stringify(que.text, null, 2))}</Text>
               <Text style={{marginTop:50,  marginLeft:20, fontWeight: 'bold', textAlign:'left', fontSize:20}}>Answer</Text>
               <Text style={styles.ansStyle}>{JSON.stringify(ans)}</Text>
           </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dddddd',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    queStyle: {
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        margin: 30,
        width:300,
        textAlign:'center',
        fontSize: 17,

    },
    ansStyle:{
        textAlign:'center',
    }
  });
  export default Answer;