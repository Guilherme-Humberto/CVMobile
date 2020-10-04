import React, { useEffect, useState } from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import {
  Container,
  TitleUserPage,
  DescUserPage,
  DescUserPageList,
  ImageInitial,
  ImageInitial2,
  ImageInitial3,
  ImageInitial4
} from './styles'

import img1 from '../../../../assets/imgs/imgMain4.jpg'
import img2 from '../../../../assets/imgs/imgMain2.jpg'
import img3 from '../../../../assets/imgs/imgMain1.jpg'
import img4 from '../../../../assets/imgs/imgMain3.jpg'

const UserPage = () => {
  const [infos, setInfos] = useState({})

  useEffect(() => {
    async function getInfos() {
      const user = await AsyncStorage.getItem("infos")
      setInfos(JSON.parse(user))
    }
    getInfos()
  }, [])

  return (
    <>
      <ScrollView>
        <Container>
          <ImageInitial source={img1} />
          <TitleUserPage>Olá {infos.name}</TitleUserPage>
          <DescUserPage>
            A doação de sangue é um ato voluntario e altruísta de extrema importância, pois o sangue humano não pode ser fabricado artificialmente.
          </DescUserPage>
          
          <ImageInitial2 source={img2} />
          <TitleUserPage>COM UM ATO DE SOLIDARIEDADE, VOCÊ PODE SALVAR ATÉ 4 VIDAS.</TitleUserPage>
          <DescUserPage>
          A doação é um procedimento totalmente seguro. O volume coletado é de aproximadamente 450 ml (padrão internacional), o que representa uma fração muito pequena do total de sangue de um adulto.
          </DescUserPage>
          

          <ImageInitial3 source={img3} />
          <TitleUserPage>RAZÕES PARA DOAR SANGUE</TitleUserPage>
          <DescUserPage>
            Vítimas de acidentes de trânsito e queimaduras;
            Pacientes com câncer;
            Pacientes hemofílicos, que significa uma desordem no mecanismo de coagulação do sangue;
          </DescUserPage>

          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              marginBottom: 20
            }}
          />
          
          <TitleUserPage>O QUE VOCÊ PRECISA PARA DOAR SANGUE?</TitleUserPage>
            <DescUserPageList><Icon name="check" size={15}/> Apresentar um documentos (RG, CNH)</DescUserPageList>
            <DescUserPageList><Icon name="check" size={15}/> Ter idade entre 16 e 69 anos</DescUserPageList>
            <DescUserPageList><Icon name="check" size={15}/> Estar em boas condições de saúde</DescUserPageList>
            <DescUserPageList><Icon name="check" size={15}/> Pesar no mínimo 50 kg</DescUserPageList>
            <DescUserPageList><Icon name="check" size={15}/> Não ter tido gripe ou resfriado nos últimos 30 dias</DescUserPageList>
            <DescUserPageList><Icon name="check" size={15}/> Não ter tido Sífilis, Doença de Chagas ou AIDS</DescUserPageList>
            <DescUserPageList><Icon name="check" size={15}/> Não ter diabetes em uso de medicações</DescUserPageList>
          
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              marginBottom: 20,
              marginTop: 20
            }}
          />
          
          <ImageInitial4 source={img4} />
          <TitleUserPage>PARA QUEM VAI O MEU SANGUE DOADO?</TitleUserPage>
          <DescUserPage>
            O sangue e seus hemocomponentes destinam-se aos pacientes que necessitam de tratamento transfusional, ou seja, aqueles que precisam de sangue em função de doenças do sangue, câncer, tumores, leucemias, ou em função da realização de cirurgias, entre outras enfermidades.
          </DescUserPage>
        </Container>
      </ScrollView>
    </>
  );
}

export default UserPage;