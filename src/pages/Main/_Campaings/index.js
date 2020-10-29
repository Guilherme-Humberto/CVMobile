import React from 'react';
import Fetcher from '../../../hooks/Fetcher'
import { 
  styles,
  Container,
  TitleCamps,
  DescCamps
 } from './styles';

 import { FlatList, View, Image, Text, StyleSheet } from 'react-native'

function _Campaigns() {
  const { data } = Fetcher("/campaign?limit=4")

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

  function ListRender (props) {
    return(
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: props.img }}/>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.desc}>{props.desc}</Text>
      </View>
    )
  }

  return (
      <>
        <Container>
            <TitleCamps>Campanhas</TitleCamps>
            <DescCamps>
              Com a sua ajuda podemos conectar ainda mais vidas por meio de
              campanhas. Veja as disponíveis abaixo e ajude-nos a incentivar a
              doação de sangue
            </DescCamps>

            <FlatList 
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={data}
              keyExtractor={(item) => item._id.toString()}
              renderItem={({ item }) => (
                <ListRender 
                  img={item.img}
                  title={item.name}
                  desc={item.desc}
                />
              )}
            />
        </Container>
      </>
  );
}

export default _Campaigns;
