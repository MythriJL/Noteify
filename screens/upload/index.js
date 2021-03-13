import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native';
import * as  DocumentPicker  from 'expo-document-picker';
export default class Upload extends React.Component {
    _pickDocument = async (navigation) => {
        let result = await DocumentPicker.getDocumentAsync({});
        // alert(result.uri);
        navigation.navigate('Question')
        console.log(result);
    }
    render() {
        const {navigation} =  this.props;
        return (
            <>
                <SafeAreaView style={styles.container}>
                    <Button
                        title="Select Document"
                        onPress={()=>this._pickDocument(navigation)}
                    />
                </SafeAreaView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
