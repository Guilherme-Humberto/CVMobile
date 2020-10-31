import React, { useEffect, useState } from 'react';
import { View, AsyncStorage } from 'react-native';

import {
  Container,
  TitleInfos,
  TextInfo,
  ContainerInfos,
  ContainerPerfil,
  TitlePerfil,
  TextPerfil,
  ImageTop,
  InputInfo,
  Label,
  InputAdress,
  Form,
  Adress,
  ButtonPerfil,
  TextButtonPerfil,
  Space
} from './styles';

const UserInfos = () => {
  const [infos, setInfos] = useState({})
  // async function handleLogout () {
  //   await AsyncStorage.removeItem("infos")
  // }
  useEffect(() => {
    async function getInfos() {
      await AsyncStorage.getItem("infos").then((user) => {
        setInfos(JSON.parse(user))
      })
    }
    getInfos()
  }, [])
  console.log(infos)
  return (
    <>
      <Container>
        {!infos.bloodtype ? (
          <ContainerPerfil>
            <ImageTop />
            <TitlePerfil>Complete seu cadastro</TitlePerfil>
            <TextPerfil>
              Faltam Mais Alguns dados para você completar o seu perfil, preencha os campos abaixo.
            </TextPerfil>

            <Form>
              <Label>Endereço</Label>
              <Adress>
                <InputAdress
                  placeholder="Endereço"
                  placeholderTextColor="#000"
                  autoCapitalize="words"
                />
                <InputAdress
                  placeholder="Numero"
                  placeholderTextColor="#000"
                  autoCapitalize="words"
                />
              </Adress>
              <Label>Celular</Label>
              <InputInfo
                placeholder="Celular"
                placeholderTextColor="#000"
                autoCapitalize="words"
              />

              <Label>Tipo Sanguíneo</Label>
              <InputInfo
                style={{ width: 200 }}
                placeholder="Tipo Sanguíneo"
                placeholderTextColor="#000"
                autoCapitalize="words"
              />
              <ButtonPerfil>
                <TextButtonPerfil>Atualizar</TextButtonPerfil>
              </ButtonPerfil>
            </Form>
          </ContainerPerfil>
        ) : (
            <ContainerInfos>
              <TitleInfos>Seu Perfil esta completo</TitleInfos>
              <TextInfo>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, veniam.</TextInfo>
              
              <Form>
                <Label>E-Mail</Label>
                <InputInfo value={infos.email}/>
                <Space />

                <Label>Endereço</Label>
                <InputInfo value={infos.adress}/>
                <Space />

                <Label>Celular</Label>
                <InputInfo value={infos.cell}/>
                <Space/>
                
                <Label>Tipo Sanguíneo</Label>
                <InputInfo value={infos.bloodtype}/>
              </Form>
            </ContainerInfos>
          )}
      </Container>
    </>
  );
}

export default UserInfos;