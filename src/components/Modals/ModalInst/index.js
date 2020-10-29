import React from 'react';
import { View, Text } from 'react-native';
import Fetcher from '../../../hooks/Fetcher';
import Icon from 'react-native-vector-icons/AntDesign'

import {
  Container,
  ButtonCloseModal,
  ListInst,
  Name,
  Desc
} from './styles'

const ModalInst = ({ closeModal }) => {
  const { data } = Fetcher("institutions")

  if(!data) return <Text>Carregando...</Text>

  console.log(data)
  return (
    <Container>
      <ButtonCloseModal onPress={closeModal}>
        <Icon name="close" size={35}/>
      </ButtonCloseModal>
      
      <ListInst>
      {data.map((item) => (
        <View key={item._id}>
          <Name>{item.name}</Name>
          <Desc>{item.desc}</Desc>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              marginVertical: 20
            }}
          />
        </View>
      ))}
      </ListInst>
    </Container>
  );
}
export default ModalInst;
