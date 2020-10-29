import React, { useEffect, useState } from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import {
  Container,
  TitleUserPage,
  DescUserPage,
  TitleCard,
  DescCard,
  DescCardList,
  Header,
  Content
} from './styles'

const UserPage = ({ navigation }) => {
  // const { navigation } = route.params
  const [infos, setInfos] = useState({})

    async function getInfos () {
      const user = await AsyncStorage.getItem('infos')

      if (!user) {
        navigation.navigate('Campaings');
      }
      else {
        setInfos(JSON.parse(user))
      }
    }
    getInfos()


  return (
    <>
      <ScrollView>
        <Container>
          <Header>
            <TitleUserPage>Olá {infos.name}</TitleUserPage>
            <DescUserPage>
              A doação de sangue é um ato voluntario e altruísta de extrema importância, pois o sangue humano não pode ser fabricado artificialmente.
            </DescUserPage>
          </Header>

          <Content>
            <TitleCard>COM UM ATO DE SOLIDARIEDADE, VOCÊ PODE SALVAR ATÉ 4 VIDAS.</TitleCard>
            <DescCard>
              A doação é um procedimento totalmente seguro. O volume coletado é de aproximadamente 450 ml (padrão internacional), o que representa uma fração muito pequena do total de sangue de um adulto.
          </DescCard>


            <TitleCard>RAZÕES PARA DOAR SANGUE</TitleCard>
            <DescCard>
              Vítimas de acidentes de trânsito e queimaduras;
              Pacientes com câncer;
              Pacientes hemofílicos, que significa uma desordem no mecanismo de coagulação do sangue;
          </DescCard>

            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 0.5,
                marginBottom: 20
              }}
            />

            <TitleCard>O QUE VOCÊ PRECISA PARA DOAR SANGUE?</TitleCard>
            <DescCardList><Icon name="check" size={15} /> Apresentar um documentos (RG, CNH)</DescCardList>
            <DescCardList><Icon name="check" size={15} /> Ter idade entre 16 e 69 anos</DescCardList>
            <DescCardList><Icon name="check" size={15} /> Estar em boas condições de saúde</DescCardList>
            <DescCardList><Icon name="check" size={15} /> Pesar no mínimo 50 kg</DescCardList>
            <DescCardList><Icon name="check" size={15} /> Não ter tido gripe ou resfriado nos últimos 30 dias</DescCardList>
            <DescCardList><Icon name="check" size={15} /> Não ter tido Sífilis, Doença de Chagas ou AIDS</DescCardList>
            <DescCardList><Icon name="check" size={15} /> Não ter diabetes em uso de medicações</DescCardList>

            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 0.5,
                marginBottom: 20,
                marginTop: 20
              }}
            />

            <TitleCard>PARA QUEM VAI O MEU SANGUE DOADO?</TitleCard>
            <DescCard>
              O sangue e seus hemocomponentes destinam-se aos pacientes que necessitam de tratamento transfusional, ou seja, aqueles que precisam de sangue em função de doenças do sangue, câncer, tumores, leucemias, ou em função da realização de cirurgias, entre outras enfermidades.
          </DescCard>
          </Content>
        </Container>
      </ScrollView>
    </>
  );
}

export default UserPage;