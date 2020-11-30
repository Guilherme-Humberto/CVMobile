import React from "react";
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Fontisto";
import Fetcher from "../../../hooks/Fetcher";
import LoadMessage from "../../../components/LoadMessage";

import {
  Container,
  ContainerIcons,
  TextIcon,
  Image,
  TitleCampTop,
  DescCampTop,
  CardCampaings,
  TitleCard,
  DescCard,
} from "./styles";

const _Campaigns = () => {
  const { data } = Fetcher(`/campaign`);

  if (!data) return <LoadMessage />;

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
              <Image source={{ uri: item.img }} />
              <TitleCard>{item.name}</TitleCard>
              <DescCard>{item.desc}</DescCard>
              <ContainerIcons>
                <TextIcon>
                  <Icon2 name="email" size={18} /> {item.email}
                </TextIcon>
                <TextIcon>
                  <Icon name="phone" size={18} /> {item.phone}
                </TextIcon>
              </ContainerIcons>
            </CardCampaings>
          ))}
        </Container>
      </ScrollView>
    </>
  );
};

export default _Campaigns;
