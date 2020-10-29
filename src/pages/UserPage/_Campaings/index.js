import React, { useEffect, useState } from 'react';
import { ScrollView, AsyncStorage, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Fontisto'
import Fetcher from '../../../hooks/Fetcher';
import { 
    Container,
    ContainerIcons,
    TextIcon,
    Image,
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

          {data.map((item) => (
            <CardCampaings key={item._id}>
              <Image source={{ uri: item.img }}/>
              <TitleCard>{item.name}</TitleCard>
              <DescCard>{item.desc}</DescCard>
              <ContainerIcons>
                <TextIcon>
                  <Icon2
                    name="email" 
                    size={18}
                  /> {item.email}
                </TextIcon>
                <TextIcon>
                  <Icon
                    name="phone" 
                    size={18}
                  /> {item.phone}
                </TextIcon>
              </ContainerIcons>
            </CardCampaings>
          ))}
        </Container>
      </ScrollView>
      </>
  );
}

export default _Campaigns;