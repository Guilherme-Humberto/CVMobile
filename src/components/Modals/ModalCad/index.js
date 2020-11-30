import React, { useState, useEffect } from "react";
import api from "../../../service/api";

import {
  Container,
  Containerform,
  TitleModalCad,
  DescModalCad,
  InputModalCad,
  ButtonAcess,
  TextButtonAcess,
  ButtonNav,
  MessageError,
} from "./styles";

import Icon from "react-native-vector-icons/AntDesign";
import { AsyncStorage } from "react-native";

const ModalCad = ({ buttonCloseModal, navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userError, setUserError] = useState("");

  const validateFields = () => {
    if (!name || !email || !age || !password) {
      setErrorMessage("Preencha todos os campos");
    }

    if (password.length < 5) {
      setErrorMessage("A senha deve conter pelos menos 5 caracteres");
    }
    if (password.length > 8) {
      setErrorMessage("A senha deve conter no máximo 8 caracteres");
    }

    if (age < 18) {
      setErrorMessage("Você ainda não doar sangue");
    }
  };
  const handleSubmit = async () => {
    validateFields();
    try {
      api
      .post("/register", {
        name,
        email,
        password,
        age,
        bio: "",
        adress: "",
        cell: "",
        phone: "",
        bloodtype: "",
      })
      .then(async (response) => {
        const { user, error } = response.data;
        if(error) {
          setUserError(error)
        }
        await AsyncStorage.setItem("infos", JSON.stringify(user));
        navigation.navigate("UserPage");
      })
      .catch((err) => console.log(err));
    }
    catch(err) {
      alert(err.message)
    }
  };

  return (
    <>
      <Container>
        <ButtonNav onPress={buttonCloseModal}>
          <Icon name="close" size={35} color="black" />
        </ButtonNav>
        <Containerform>
          <TitleModalCad>Cadastrar</TitleModalCad>
          <DescModalCad>Crie sua conta e venha conectar vidas</DescModalCad>
          {errorMessage ? <MessageError>{errorMessage}</MessageError> : null}
          {userError ? <MessageError>{userError}</MessageError> : null}

          <InputModalCad
            onChangeText={(value) => setName(value)}
            placeholder="Nome"
            placeholderTextColor="#000"
          />
          <InputModalCad
            onChangeText={(value) => setEmail(value)}
            placeholder="E-mail"
            placeholderTextColor="#000"
          />

          <InputModalCad
            onChangeText={(value) => setAge(value)}
            placeholder="Idade"
            placeholderTextColor="#000"
          />

          <InputModalCad
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true}
            textContentType={"password"}
            placeholder="Senha"
            placeholderTextColor="#000"
          />

          <ButtonAcess onPress={handleSubmit}>
            <TextButtonAcess>Cadastrar</TextButtonAcess>
            <Icon name="user" size={20} color="white" />
          </ButtonAcess>
        </Containerform>
      </Container>
    </>
  );
};

export default ModalCad;
