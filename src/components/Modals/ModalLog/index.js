// Modal de navbar

import React, { useState } from "react";
import { AsyncStorage, Text } from "react-native";
import api from "../../../service/api";

import {
  Container,
  Containerform,
  TitleModalLog,
  DescModalLog,
  InputModalLog,
  ButtonNav,
  ButtonForgot,
  TextButtonForgot,
  ButtonAcess,
  TextButtonAcess,
  MessageError
} from "./styles";

import Icon from "react-native-vector-icons/AntDesign";

const ModalLog = ({ navigation, buttonCloseModal }) => {
  const [modalForgot, setModalForgot] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confimPassword, setForgotPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [invalidPassword, setInvalidPassword] = useState("");

  const handleModalForgot = () => setModalForgot(false);
  const handleModalLogin = () => setModalForgot(true);

  const handleSubmit = async () => {
    try {
      api
        .post("/login", { email, password })
        .then(async (response) => {
          const { user } = response.data;
          if (!user) setErrorMessage("Usuário não encontrado");

          await AsyncStorage.setItem("infos", JSON.stringify(user));
          navigation.navigate("UserPage");
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err.message);
    }
  };

  async function handleForgotPassword() {
    try {
      if (password !== confimPassword) {
        setInvalidPassword("As senhas não correspondem")
      } else {
        await api.patch("/forgot", { email, password })
          .then((res) => {
            setModalForgot(true)
            console.log(res)
          })
          .catch(err => console.log(err))
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <Container>
        <ButtonNav onPress={buttonCloseModal}>
          <Icon name="close" size={35} color="black" />
        </ButtonNav>

        {modalForgot ? (
          <Containerform>
            <TitleModalLog>Acessar</TitleModalLog>
            <DescModalLog>Bem vindo de volta</DescModalLog>
            {errorMessage ? <MessageError>{errorMessage}</MessageError> : null}
            <InputModalLog
              onChangeText={(value) => setEmail(value)}
              placeholder="E-mail"
              placeholderTextColor="#000"
            />
            <InputModalLog
              onChangeText={(value) => setPassword(value)}
              secureTextEntry={true}
              textContentType={"password"}
              placeholder="Senha"
              placeholderTextColor="#000"
            />
            <ButtonForgot onPress={handleModalForgot}>
              <TextButtonForgot>Esqueci Minha Senha</TextButtonForgot>
            </ButtonForgot>
            <ButtonAcess onPress={handleSubmit}>
              <TextButtonAcess>Acessar</TextButtonAcess>
              <Icon name="user" size={20} color="white" />
            </ButtonAcess>
          </Containerform>
        ) : (
          <Containerform>
            <TitleModalLog>Alterar Senha</TitleModalLog>
            <DescModalLog>
              Esqueceu sua senha ? sem problemas, digite uma nova
            </DescModalLog>
            {invalidPassword ? <MessageError>{invalidPassword}</MessageError>: null}
            <InputModalLog
              placeholder="Digite seu E-mail"
              onChangeText={(value) => setEmail(value)}
              placeholderTextColor="#000"
              value={email}
            />
            <InputModalLog
              secureTextEntry={true}
              textContentType={"password"}
              onChangeText={(value) => setPassword(value)}
              placeholder="Digite uma nova senha"
              value={password}
              placeholderTextColor="#000"
            />
            <InputModalLog
              secureTextEntry={true}
              onChangeText={(value) => setForgotPassword(value)}
              textContentType={"password"}
              value={confimPassword}
              placeholder="Confirme sua nova senha"
              placeholderTextColor="#000"
            />
            <ButtonForgot onPress={handleModalLogin}>
              <TextButtonForgot>Voltar para login</TextButtonForgot>
            </ButtonForgot>
            <ButtonAcess onPress={handleForgotPassword}>
              <TextButtonAcess>Alterar Senha</TextButtonAcess>
            </ButtonAcess>
          </Containerform>
        )}
      </Container>
    </>
  );
};

export default ModalLog;
