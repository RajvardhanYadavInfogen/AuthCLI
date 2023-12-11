import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Platform,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import FileViewer from 'react-native-file-viewer';
import DocumentPicker from 'react-native-document-picker';

const HomeScreen = () => {
  const [selectedFile, setSelectedFile] = useState<any>();
   
 

  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
  
        type: [DocumentPicker.types.allFiles],
     
      });
      if (res) {
        
        console.log(res);
        let uri = res[0].uri;
        if (Platform.OS === 'ios') {
         
          uri = res[0].uri.replace('file://', '');
        }
        console.log('URI : ' + uri);
        FileViewer.open(uri)
          .then(() => {
          
            console.log('Success');
          })
          .catch(_err => {
            
            console.log(_err);
          });
      }

    
    } catch (err) {
    
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Canceled');
      } else {
        
        Alert.alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Pick a File" onPress={pickDocument} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
});
