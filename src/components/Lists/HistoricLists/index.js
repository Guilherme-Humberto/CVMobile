import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, ScrollView } from 'react-native'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/Fontisto'

import { styles } from './styles'
import api from '../../../service/api'

const HistoricLists = () => {
    const [historics, setHistorics] = useState([])

    useEffect(() => {
        async function fecthData () {
          await api.get("/historic/list")
          .then((response) => setHistorics(response.data.registros))
          .catch(err => console.log(err))
        }
        fecthData()
      }, [])

    const RenderList = (props) => (
        <SafeAreaView style={styles.containerList}>
          <View style={styles.containerInfos}>
            <Text style={styles.labelinfo}><Icon2 name="building-o" size={16}/> {props.local}</Text>
            <Text style={styles.labelinfo}><Icon2 name="calendar-check-o" size={16}/> {props.date}</Text>
            <Text style={styles.labelinfo}><Icon3 color={"red"} name="blood-drop" size={16}/> {props.typeDonation}</Text>
          </View>
        </SafeAreaView>
    )
  return (
      <>
        <FlatList 
          style={styles.list}
          showsVerticalScrollIndicator={false}
          data={historics}
          keyExtractor={ (item, index) => index.toString() }
          renderItem={({ item }) => (
            <RenderList 
              local={item.local}
              date={item.date}
              typeDonation={item.typeDonation}
            />
          )}
        />
      </>
  );
}

export default HistoricLists;