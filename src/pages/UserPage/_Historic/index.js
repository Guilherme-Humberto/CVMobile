import React, { useState, useEffect, useCallback } from "react";
import { AsyncStorage, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import ModalAddHistoric from "../../../components/Modals/ModalAddHistoric";
import Fetcher from "../../../hooks/Fetcher";
import LoadMessage from "../../../components/LoadMessage";
import api from '../../../service/api'

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
  TextHeader,
  ButtonDelete,
  Card,
  InfoDate,
  InfoLocal,
  InfoType,
  Infos
} from "./styles";
import { FlatList } from "react-native-gesture-handler";

const _Historic = () => {
  const [infos, setInfos] = useState({});
  const [modalAdd, setModalAdd] = useState(false);

  const { data, mutate } = Fetcher(`/historic/list/${infos._id}`);
  
  useEffect(() => {
    async function getInfos() {
      const user = await AsyncStorage.getItem("infos");
      setInfos(JSON.parse(user));
    }
    getInfos();
  }, []);

  const handleDeleteNote = useCallback((id) => {
      api.delete(`/historic/${id}`);

      const teste = data.map((item) => {
        if (item._id === id) {
          return { ...item };
        }
        return item;
      });
      mutate(teste, true);
    }, [data, mutate]
  );


  if (!data) return <LoadMessage />;

  return (
    <>
      {data.length === 0 ? (
        <ContainerHeader>
          <TitleHeader>Registre suas doações</TitleHeader>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              width: 300,
              marginVertical: 5,
            }}
          />
          <TextHeader>
            Notamos que você ainda não registrou nenhuma doação. É bem fácil,
            basta clicar em adicionar e preencher os campos.
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
                Aqui você pode visualizar o seu histórico de doações. Basta
                preencher corretamente os campos abaixo.
              </DescHistoric>
              <Button onPress={() => setModalAdd(true)}>
                <TextButton>Adicionar</TextButton>
              </Button>
            </Header>

            <FlatList
              data={data}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                <Card>
                  <ButtonDelete onPress={() => handleDeleteNote(item._id)}>
                    <Icon name="close" color="#fff" size={25} />
                  </ButtonDelete>
                  <InfoLocal>{item.local}</InfoLocal>
                  <Infos>
                    <InfoDate>{item.date}</InfoDate>
                    <View
                      style={{
                        borderLeftWidth: "black",
                        borderLeftWidth: 1,
                        height: 15,
                        marginHorizontal: 10.5,
                      }}
                    />
                    <InfoType>Tipo de Doação: {item.typeDonation}</InfoType>
                  </Infos>
                </Card>
              )}
            />
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
};

export default _Historic;
