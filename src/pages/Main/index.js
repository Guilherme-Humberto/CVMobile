import React, { useState } from 'react';
import Initial from './_Initial';
import Campaings from './_Campaings';
import Institutions from './_Institutions';
import About from './_About';
import { ScrollView } from 'react-native'

import {
  ButtonLog,
  ButtonCad,
  ButtonNav,
  TextButton,
  TextButtonLog,
  TextButtonCad
 } from './styles'

import Footer from '../../components/Footer/index'
import ModalLog from '../../components/Modals/ModalLog'
import ModalCad from '../../components/Modals/ModalCad'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

const Main = ({ navigation }) => {
  const [openModal, setopenModal] = useState(false)
  const [openModalCad, setopenModalCad] = useState(false)
  
  return (
      <>
        <ScrollView>
          <Initial 
          buttonOpenModalLog={
            <ButtonLog onPress={() => setopenModal(true)}>
              <TextButtonLog>Acessar</TextButtonLog>
            </ButtonLog>
          }
          buttonOpenModalCad={
            <ButtonCad onPress={() => setopenModalCad(true)}>
              <TextButtonCad>
                Cadastrar
              </TextButtonCad>
              <Icon2 name="account-arrow-right" size={25} color="white" />
            </ButtonCad>
          }
          />
          <Campaings />
          <Institutions/>
          <About />
          <Footer />
        </ScrollView>

        {openModal && 
          <ModalLog
            navigation={navigation}
            buttonCloseModal={
              <ButtonNav onPress={() => setopenModal(false)}>
                <TextButton><Icon name="close" size={30} color="black" /></TextButton>
              </ButtonNav>}
            /> 
        }

        {openModalCad &&
          <ModalCad
            navigation={navigation}
            buttonCloseModal={
              <ButtonNav onPress={() => setopenModalCad(false)}>
                <TextButton><Icon name="close" size={30} color="black" /></TextButton>
              </ButtonNav>}
          />
        }
      </>
  );
}

export default Main;