import React, { useEffect, useState } from 'react';
import { ScrollView, AsyncStorage, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Feather'
import Fetcher from '../../../hooks/Fetcher';
import { 
    Container,
    ContainerIcons,
    TextIcon,
    ImageGifTOp,
    TitleCampTop,
    DescCampTop,
    CardCampaings,
    TitleCard,
    DescCard
} from './styles';

const _Campaigns = () => {
  const [infos, setInfos] = useState({})

  useEffect(() => {
    async function getInfos() {
      const user = await AsyncStorage.getItem("infos")
      setInfos(JSON.parse(user))
    }
    getInfos()
  }, [])

  const { data } = Fetcher(`/campaign`)

  if(!data) return (
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

  return (
      <>
      <ScrollView>
        <Container>
          <TitleCampTop>Campanhas</TitleCampTop>
          <DescCampTop>
            Estamos esperando você de portas abertas. Conheça nossos projetos.
          </DescCampTop>
          <CardCampaings>
            <TitleCard>Exemplo</TitleCard>
            <DescCard>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, cum?</DescCard>
            <ContainerIcons>
              <TextIcon><Icon style={{marginRight: 60}} color={"green"} name="phone" size={18}/> (11) 2328-2010</TextIcon>
              <TextIcon><Icon2 style={{marginRight: 60}} color={"green"} name="smartphone" size={18}/> (11) 9382-5321</TextIcon>
            </ContainerIcons>
          </CardCampaings>

          <CardCampaings>
            <TitleCard>Exemplo</TitleCard>
            <DescCard>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, cum?</DescCard>
            <ContainerIcons>
              <TextIcon><Icon style={{marginRight: 60}} color={"green"} name="phone" size={18}/> (11) 2328-2010</TextIcon>
              <TextIcon><Icon2 style={{marginRight: 60}} color={"green"} name="smartphone" size={18}/> (11) 9382-5321</TextIcon>
            </ContainerIcons>
          </CardCampaings>

          <CardCampaings>
            <TitleCard>Exemplo</TitleCard>
            <DescCard>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, cum?</DescCard>
            <ContainerIcons>
              <TextIcon><Icon style={{marginRight: 60}} color={"green"} name="phone" size={18}/> (11) 2328-2010</TextIcon>
              <TextIcon><Icon2 style={{marginRight: 60}} color={"green"} name="smartphone" size={18}/> (11) 9382-5321</TextIcon>
            </ContainerIcons>
          </CardCampaings>

          <CardCampaings>
            <TitleCard>Exemplo</TitleCard>
            <DescCard>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, cum?</DescCard>
            <ContainerIcons>
              <TextIcon><Icon style={{marginRight: 60}} color={"green"} name="phone" size={18}/> (11) 2328-2010</TextIcon>
              <TextIcon><Icon2 style={{marginRight: 60}} color={"green"} name="smartphone" size={18}/> (11) 9382-5321</TextIcon>
            </ContainerIcons>
          </CardCampaings>

          <CardCampaings>
            <TitleCard>Exemplo</TitleCard>
            <DescCard>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, cum?</DescCard>
            <ContainerIcons>
              <TextIcon><Icon style={{marginRight: 60}} color={"green"} name="phone" size={18}/> (11) 2328-2010</TextIcon>
              <TextIcon><Icon2 style={{marginRight: 60}} color={"green"} name="smartphone" size={18}/> (11) 9382-5321</TextIcon>
            </ContainerIcons>
          </CardCampaings>
        </Container>
      </ScrollView>
      </>
  );
}

export default _Campaigns;