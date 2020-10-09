import React, { useState } from 'react';
import { Linking } from 'react-native'

import { 
    Container,
    TitleMain,
    DescMain,
    ContainerButtonInitial,
    ButtonCad,
    TextButtonCad,
    ImageMain,
  } from './styles';
  
 import NavBar from '../../../components/NavBar';

 import imgHome from '../../../../assets/imgs/imgHome.jpg'


const Initial = (props) => {
  const [openModal, setopenModal] = useState(false)
  
  return (
    <>
      <NavBar />
      <Container>
          <TitleMain>Conectando Vidas</TitleMain>
          <DescMain>
            O Conectando Vidas é um app gratuito que tem como objetivo
            incentivar a doação de sangue. O serviço conecta potenciais
            doadores com os hemocentros mais próximos a ele.
          </DescMain>
          <ImageMain source={imgHome}/>
          <ContainerButtonInitial>
            {props.buttonOpenModalLog}
            {props.buttonOpenModalCad}
          </ContainerButtonInitial>
      </Container>
    </>
  );
}

export default Initial;