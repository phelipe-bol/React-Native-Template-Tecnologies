import React, {useState} from 'react';
import {View, Image, Button, FlatList} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const StoreImage = () => {
  const [recoveredImages, setRecoveredImages] = useState(null);

  const pickImage = async () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
      selectionLimit: 10,
    };

    await launchImageLibrary(options, response => {
      console.log(response);
      if (response.didCancel) {
        console.log('O usuário cancelou ou ocorreu um erro');
      } else if (response.errorMessage) {
        console.error(response.errorMessage);
      } else {
        setRecoveredImages(response.assets);
      }
    });
  };
  const renderItem = ({item}) => (
    // eslint-disable-next-line react-native/no-inline-styles
    <Image source={{uri: item.uri}} style={{width: 300, height: 300}} />
  );

  console.log(recoveredImages);

  return (
    <View>
      {recoveredImages && (
        <FlatList
          data={recoveredImages}
          renderItem={renderItem}
          keyExtractor={item => item.filename}
        />
      )}
      <Button title="Carregar imagem" onPress={pickImage} />
    </View>
  );
};
export default StoreImage;
