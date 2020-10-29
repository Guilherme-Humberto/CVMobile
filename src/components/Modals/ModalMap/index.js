import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Fetcher from '../../../hooks/Fetcher';
import { 
  Container,
  ButtonCloseModal,
  Content,
  ContainerInst,
  Name,
  TextInst,
  Info 
} from './styles';

const ModalMap = ({ infos, closeModal }) => {
  const { data } = Fetcher(`/institutions/${infos}`)

  if(!data) return (
    <View 
      style={{ 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center" 
      }}>
      <Text 
        style={{ 
          fontFamily: "Alata", 
          fontSize: 30, 
          color: "#444" 
      }}>Carregando...</Text>
    </View>
  )
  return (
    <Container>
      <ButtonCloseModal onPress={closeModal}>
        <Icon name="close" size={35}/>
      </ButtonCloseModal>
      
      <Content>
          <ContainerInst>
            <Name>{data.name}</Name>
            <TextInst>{data.text}</TextInst>
            <Info><Text style={{ fontWeight: "bold" }}>Email:</Text> {data.email}</Info>
            <Info><Text style={{ fontWeight: "bold" }}>Telefone:</Text> {data.phone}</Info>
          </ContainerInst>
      </Content>
    </Container>
  );
};

export default ModalMap;
