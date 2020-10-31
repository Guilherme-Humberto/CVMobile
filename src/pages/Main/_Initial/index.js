import React, { useEffect } from 'react';
import { AsyncStorage, View } from 'react-native'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

import { 
    Container,
    TitleMain,
    DescMain,
    ContainerButtonInitial,
    ButtonCad,
    TextButtonCad,
    ImageMain,
    ButtonLog,
    TextButtonLog
  } from './styles';
  
 import imgHome from '../../../../assets/imgs/imgHome.jpg'


const Initial = ({ navigation, buttonOpenModalLog, buttonOpenModalCad }) => {
  useEffect(() => {
    AsyncStorage.getItem('infos').then(user => {
      if (user) {
        navigation.navigate('UserPage');
      }
      else {
        navigation.navigate('Main');
      }
    })
  }, []);
  
  return (
    <>
      <Container>
          <TitleMain>Conectando Vidas</TitleMain>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              width: 300,
              marginVertical: 5
            }}
          />
          <DescMain>
            O Conectando Vidas é um app gratuito que tem como objetivo
            incentivar a doação de sangue. O serviço conecta potenciais
            doadores com os hemocentros mais próximos a ele.
          </DescMain>
          <ImageMain source={imgHome}/>
          <ContainerButtonInitial>
            <ButtonLog onPress={buttonOpenModalLog}>
              <TextButtonLog>Acessar</TextButtonLog>
            </ButtonLog>

            <ButtonCad onPress={buttonOpenModalCad}>
              <TextButtonCad>Cadastrar</TextButtonCad>
              <Icon2 name="account-arrow-right" size={25} color="white" />
            </ButtonCad>
          </ContainerButtonInitial>
      </Container>
    </>
  );
}

export default Initial;