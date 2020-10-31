import React, { useState, useEffect } from 'react';
import { ScrollView, AsyncStorage, Text, View } from 'react-native';

import HistoricLists from '../../../components/Lists/HistoricLists'
import ModalAddHistoric from '../../../components/Modals/ModalAddHistoric';
import Fetcher from '../../../hooks/Fetcher';

import {
  Container,
  TitleHistoric,
  DescHistoric,
  Header,
  Button,
  TextButton,
  ButtonAddDonation,
  TextButtonDonation,
  ContainerHeader,
  TitleHeader,
  TextHeader
} from './styles';

const _Historic = () => {
  const [infos, setInfos] = useState({})
  const [modalAdd, setModalAdd] = useState(false)

  useEffect(() => {
    async function getInfos() {
      const user = await AsyncStorage.getItem("infos")
      setInfos(JSON.parse(user))
    }
    getInfos()
  }, [])

  const { data } = Fetcher(`/historic/list/${infos._id}`)

  if (!data) return (
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
  console.log(data)
  return (
    <>
      {data.length === 0 ? (
        <ContainerHeader>
          <TitleHeader>Registre suas doações</TitleHeader>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              width: 300,
              marginVertical: 5
            }}
          />
          <TextHeader>
            Notamos que você ainda não registrou nenhuma doação.
            É bem fácil, basta clicar em adicionar e preencher os campos.
          </TextHeader>

          <ButtonAddDonation onPress={() => setModalAdd(true)}>
            <TextButtonDonation>Adicionar</TextButtonDonation>
          </ButtonAddDonation>
        </ContainerHeader>
      ) : (
          <>
            <Container>
              <Header>
                <TitleHistoric>Histórico de doações</TitleHistoric>
                <DescHistoric>
                  Aqui você pode visualizar o seu histórico de doações.
                  Basta preencher corretamente os campos abaixo.
              </DescHistoric>
                <Button onPress={() => setModalAdd(true)}>
                  <TextButton>Adicionar</TextButton>
                </Button>
              </Header>

              {data.map((item) => <HistoricLists key={item._id} infos={item} />)}
            </Container>
          </>
        )}
      {modalAdd && (
        <ModalAddHistoric
          id={infos._id}
          buttonCloseModal={() => setModalAdd(false)}
        />
      )}
    </>
  );
}


export default _Historic;