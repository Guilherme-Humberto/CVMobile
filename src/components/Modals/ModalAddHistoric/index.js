import React, { useState } from 'react';
import { Text, CheckBox, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import api from '../../../service/api';

import { 
  Container,
  ButtonCloseModal,
  Form,
  Input,
  TitleForm,
  Intro,
  Label,
  Selected,
  TypeText,
  Button,
  TextButton
} from './styles';

const ModalAddHistoric = ({ buttonCloseModal, id }) => {
  const [sangue, setSangue] = useState(false)
  const [palheta, setPalheta] = useState(false)
  const [medula, setMedula] = useState(false)
  const [local, setLocal] = useState('')
  const [typeDonation, setTypeDonation] = useState('')

  const data = Date.now()
  const today = new Date(data)

  async function handleSubmit() {

    if(sangue) setTypeDonation("Sangue")
    else if(palheta) setTypeDonation("Palheta")
    else if(medula) setTypeDonation("Medula")
    else Alert.alert("Escolha um tipo de doação")

    await api.post(`/historic/${id}`, {
      local,
      date: today.toLocaleDateString(),
      typeDonation
    })
    .then((response) => {
      console.log(response.data)
      buttonCloseModal()
    })
    .catch((err) => console.log(err))
  }

  return (
    <Container>
      <ButtonCloseModal onPress={buttonCloseModal}>
        <Icon name="close" size={40}/>
      </ButtonCloseModal>
      <Form>
        <TitleForm>Adicionar nova doação</TitleForm>
        <Intro>Preencha as informações abaixo para adicionar uma nova doação</Intro>
        <Label>local</Label>
        <Input 
          placeholder="Local de doação"
          placeholderTextColor="#000"
          onChangeText={setLocal}
          autoCapitalize="words"
          autoCorrect={false}
        />
        <Selected>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CheckBox style={{ borderRadius: 100 }} onValueChange={setSangue} value={sangue}/>
            <TypeText>Sangue</TypeText>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 20 }}>
            <CheckBox style={{ borderRadius: 100 }} onValueChange={setPalheta} value={palheta}/>
            <TypeText>Plaqueta</TypeText>
          </View>
        </Selected>

        <Button onPress={handleSubmit}>
          <TextButton>Adicionar</TextButton>
        </Button>
      </Form>


    </Container>
  );
};

export default ModalAddHistoric;
