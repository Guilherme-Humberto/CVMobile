import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, AsyncStorage } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import api from '../../../service/api'
import Fetcher from '../../../hooks/Fetcher'

import {
  Container,
  Card,
  InfoLocal,
  InfoDate,
  Infos,
  InfoType,
  ButtonDelete
} from './styles'

const HistoricLists = ({ infos }) => {
  const [user, setUser] = useState({})
  const { data, mutate } = Fetcher(`/historic/list/${user._id}`)

  useEffect(() => {
    async function getInfos() {
      const user = await AsyncStorage.getItem("infos")
      setUser(JSON.parse(user))
    }
    getInfos()
  }, [])
  
  const handleDeleteNote = useCallback((id) => {
    api.delete(`/historic/${id}`)

    const teste = data.map((item) => {
      if (item._id === id) {
        return { ...item }
      }

      return item
    })

    mutate(teste, true)
  }, [data, mutate])

  if(!data) return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontFamily: "Alata", fontSize: 30, color: "#444" }}>Carregando...</Text>
    </View>
  )
  console.log(data)

  return (
    <Container>
      <Card>
        <ButtonDelete onPress={() => handleDeleteNote(infos._id)}>
          <Icon name="close" color="#fff" size={25}/>
        </ButtonDelete>
        <InfoLocal>{infos.local}</InfoLocal>
        <Infos>
          <InfoDate>{infos.date}</InfoDate>
          <View
            style={{
              borderLeftWidth: 'black',
              borderLeftWidth: 1,
              height: 15,
              marginHorizontal: 10.5
            }}
          />
          <InfoType>Tipo de Doação: {infos.typeDonation}</InfoType>
        </Infos>
      </Card>
    </Container>
  );
}

export default HistoricLists;