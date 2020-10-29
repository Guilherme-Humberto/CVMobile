// Modal de navbar

import React, { useState } from 'react';
import { AsyncStorage } from 'react-native'
import api from '../../../service/api'

import {
  Container,
  Containerform,
  TitleModalLog,
  DescModalLog,
  InputModalLog,
  ButtonNav,
  TextButton,
  ModalTop,
  ButtonForgot,
  TextButtonForgot,
  ButtonAcess,
  TextButtonAcess,
   } from './styles';

import Icon from 'react-native-vector-icons/AntDesign'

const ModalLog= ({ navigation, buttonCloseModal }) => {
  const [modalForgot, setModalForgot] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleModalForgot = () => setModalForgot(false)
  const handleModalLogin = () => setModalForgot(true)

  const handleSubmit = async () => {
    await api.post("/login", { email, password })
    .then(async(response) => {
      const { user } = response.data
      await AsyncStorage.setItem('infos', JSON.stringify(user))
      navigation.navigate("UserPage")
    })
    .catch(err => console.log(err))
  }
  return (
      <>
        <Container>
            <ModalTop>
              <ButtonNav onPress={buttonCloseModal}>
                <TextButton><Icon name="close" size={30} color="black" /></TextButton>
              </ButtonNav>
            </ModalTop>
            {modalForgot ? (
              <Containerform>
                <TitleModalLog>Acessar</TitleModalLog>
                <DescModalLog>Bem vindo de volta</DescModalLog>
                <InputModalLog 
                  onChangeText={(value) => setEmail(value)} 
                  placeholder="E-mail" 
                  placeholderTextColor="#000"
                />
                <InputModalLog 
                  onChangeText={(value) => setPassword(value)} 
                  secureTextEntry={true} 
                  textContentType={'password'} 
                  placeholder="Senha" 
                  placeholderTextColor="#000"
                />
                <ButtonForgot onPress={handleModalForgot}>
                  <TextButtonForgot>Esqueci Minha Senha</TextButtonForgot>
                </ButtonForgot>
                <ButtonAcess onPress={handleSubmit}>
                  <TextButtonAcess>Acessar</TextButtonAcess>
                  <Icon name="user" size={20} color="white"/>
                </ButtonAcess>
              </Containerform>
            ): (
              <Containerform>
                <TitleModalLog>Alterar Senha</TitleModalLog>
                <DescModalLog>Esqueceu sua senha ? sem problemas, digite uma nova</DescModalLog>
                <InputModalLog 
                  placeholder="Digite seu E-mail" 
                  placeholderTextColor="#000"
                />
                <InputModalLog 
                  secureTextEntry={true} 
                  textContentType={'password'} 
                  placeholder="Digite uma nova senha" 
                  placeholderTextColor="#000"
                />
                <InputModalLog 
                  secureTextEntry={true} 
                  textContentType={'password'} 
                  placeholder="Confirme sua nova senha" 
                  placeholderTextColor="#000"
                />
                <ButtonForgot onPress={handleModalLogin}>
                  <TextButtonForgot>Voltar para login</TextButtonForgot>
                </ButtonForgot>
                <ButtonAcess>
                  <TextButtonAcess>Acessar</TextButtonAcess>
                </ButtonAcess>
              </Containerform>
            )}
        </Container>
      </>
  );
}

export default ModalLog;