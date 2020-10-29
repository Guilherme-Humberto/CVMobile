import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, ActivityIndicator, Dimensions, Text, View, Alert } from 'react-native'
import { Container, TitleMain } from './styles';
import Fetcher from '../../../hooks/Fetcher'
import Modal from '../../../components/Modals/ModalMap/index'

// Posição inicial do usuário
// latitudeDelta e longitudeDelta: referentes ao zoom
const initialPosition = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.5105,
  longitudeDelta: 0.5091
}

const Locals = ({ navigation }) => {
  const { data } = Fetcher("institutions")
  // Pegando a largura e a altura da tela
  const { width, height } = Dimensions.get('window')

  // Estado que armazena a posição atual do usuario
  const [currentPosition, setCurrentPosition] = useState(initialPosition)
  const [openModal, setModalOpen] = useState(false)
  const [infos, setInfos] = useState("")

  // Pegando a localização do usuário
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      setCurrentPosition({
        ...currentPosition,
        latitude,
        longitude
      })
    })
  }, [])

  function schedule (id) {
    setInfos(id)
    setModalOpen(true)
  }

  // Funcão para gerar os marcadores no mapa
  const renderMarker = () => {
    return data.map((item) => (
      <Marker
        style={{ ...StyleSheet.absoluteFillObject }}
        key={item._id}
        coordinate={{
          latitude: item.lat,
          longitude: item.long,
        }}

        title={item.name}
        onPress={() => {
          Alert.alert(
            `${item.name}`,
            `${item.desc}`,
            [
              { text: "Agendar", onPress: () => schedule(item._id) },
              { text: 'Fechar', style: 'cancel' },
            ],
            {
              cancelable: true
            }
          );
        }}
      />
    ));
  }

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

  return (
    <>
      <Container>
        {currentPosition.latitude ? (
          <MapView
            style={{ width, height }}
            initialRegion={currentPosition}
            showsPointsOfInterest={false}
            showsBuildings={false}
            showsUserLocation
          >
            {renderMarker()}
          </MapView>
        ) : (
            <ActivityIndicator style={{ flex: 1 }} animating size="large" />
          )}
      </Container>

      {openModal && (
        <Modal 
          closeModal={() => setModalOpen(false)}
          infos={infos}
        />
      )}
    </>
  );
}

export default Locals;
