import React, { useState } from 'react';
import api from '../../../service/api'

import {
  Container,
  Containerform,
  TitleModalCad,
  DescModalCad,
  InputModalCad,
  InputModalCadPass,
  InputModalCadPassAge,
  InputModalCadPassCpf,
  ModalTop,
  ButtonAcess,
  TextButtonAcess,
  InputsPassword
} from './styles';

import Icon from 'react-native-vector-icons/AntDesign'
import { AsyncStorage } from 'react-native';

const ModalCad= (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async (e) => {
    await api.post("/register", {
      name, 
      email, 
      cpf, 
      password, 
      age, 
      bio: '', adress: '', cell: '', phone: '', bloodtype: ''
    })
    .then(async(response) => {
      const { user } = response.data
      await AsyncStorage.setItem('infos', JSON.stringify(user))
      {props.navigation.navigate("UserPage")}
    })
    .catch(err => console.log(err))
  }

  return (
      <>
        <Container>
            <ModalTop>{props.buttonCloseModal}</ModalTop>
            <Containerform>
                <TitleModalCad>Cadastrar</TitleModalCad>
                <DescModalCad>Crie sua conta e venha conectar vidas</DescModalCad>
                <InputModalCad onChangeText={(value) => setName(value)} placeholder="Nome" placeholderTextColor="#000"/>
                <InputModalCad onChangeText={(value) => setEmail(value)} placeholder="E-mail" placeholderTextColor="#000"/>
                <InputsPassword>
                  <InputModalCadPassCpf onChangeText={(value) => setCpf(value)} placeholder="CPF" placeholderTextColor="#000"/>
                  <InputModalCadPassAge onChangeText={(value) => setAge(value)} placeholder="Idade" placeholderTextColor="#000"/>
                </InputsPassword>
                <InputsPassword>
                  <InputModalCadPass onChangeText={(value) => setPassword(value)} secureTextEntry={true} textContentType={'password'} placeholder="Senha" placeholderTextColor="#000"/>
                  <InputModalCadPass onChangeText={(value) => setConfirmPassword(value)} secureTextEntry={true} textContentType={'password'} placeholder="Confirmar Senha" placeholderTextColor="#000"/>
                </InputsPassword>
                <ButtonAcess onPress={handleSubmit}>
                  <TextButtonAcess>Cadastrar</TextButtonAcess>
                  <Icon name="user" size={20} color="white"/>
                </ButtonAcess>
              </Containerform>
        </Container>
      </>
  );
}

export default ModalCad;