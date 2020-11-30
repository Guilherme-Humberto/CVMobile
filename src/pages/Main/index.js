import React, { useState } from 'react';
import Initial from './_Initial';
import Campaings from './_Campaings';
import Institutions from './_Institutions';
import About from './_About';
import { ScrollView } from 'react-native'

import Footer from '../../components/Footer/index'
import ModalLog from '../../components/Modals/ModalLog'
import ModalCad from '../../components/Modals/ModalCad'
import ModalInst from '../../components/Modals/ModalInst'


const Main = ({ navigation }) => {
  const [openModalLog, setopenModalLog] = useState(false)
  const [openModalCad, setopenModalCad] = useState(false)
  const [openModalInst, setopenModalInst] = useState(false)
  
  return (
      <>
        <ScrollView>
          <Initial 
            navigation={navigation}
            buttonOpenModalLog={() => setopenModalLog(true)}
            buttonOpenModalCad={() => setopenModalCad(true)}
          />
          <Campaings />
          <Institutions openModal={() => setopenModalInst(true)}/>
          <About />
          <Footer />
        </ScrollView>

        {openModalLog && 
          <ModalLog
            navigation={navigation}
            buttonCloseModal={() => setopenModalLog(false)}
          /> 
        }

        {openModalCad &&
          <ModalCad
            navigation={navigation}
            buttonCloseModal={() => setopenModalCad(false)}
          />
        }

        {openModalInst && (
          <ModalInst 
            closeModal={() => setopenModalInst(false)}
          />
        )}
      </>
  );
}

export default Main;