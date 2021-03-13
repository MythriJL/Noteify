import React, {useEffect} from 'react';
import { SafeAreaView,Text,StyleSheet,View } from 'react-native';


const Home = ({navigation}) =>{
    useEffect(()=>{
        const timer = setTimeout(()=>{
            navigation.navigate('Upload')
        },3000)
    }, []);
    return (
        <>
           <SafeAreaView style={styles.container}>
               <Text style={{color: 'white', fontWeight:'bold', fontSize:50, fontStyle:'italic', marginTop: '50%'}}>NOTEIFY</Text>
               <View style={styles.tInput}/>
               <Text style={{color: 'white', fontWeight:'500', fontSize:20}}>It's Read'in Good</Text>
           </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 3,
      backgroundColor: '#222831',
      alignItems: 'center',
      
    //   justifyContent: 'center', 
      padding:4,
      color: 'white'
    },
    tInput:{
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 20,
        width: 500,
        margin: 20,
    },
  });
  export default Home;