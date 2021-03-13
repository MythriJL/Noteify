import React, {useEffect} from 'react';
import { SafeAreaView,Text,StyleSheet } from 'react-native';


const Home = ({navigation}) =>{
    useEffect(()=>{
        const timer = setTimeout(()=>{
            navigation.navigate('Upload')
        },5000)
    }, []);
    return (
        <>
           <SafeAreaView style={styles.container}>
               <Text style={{color: 'white', fontWeight:'bold', fontSize:50, fontStyle:'italic'}}>NOTIFY</Text>
           </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#222831',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    },
  });
  export default Home;