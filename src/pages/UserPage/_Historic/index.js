import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign'

import HistoricLists from '../../../components/Lists/HistoricLists'

import { 
    Container,
    styles,
    TitleHistoric,
    DescHistoric,
    ContainerForm,
    ContainerInputs,
    ButtonDate,
    TextButtonDate,
    ButtonAdd,
    TextButtonAdd
} from './styles';

const _Historic = () => {
  const [language, setLanguage] = useState({language: ''})
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);


  const Teste = () => alert(date)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(date.toLocaleDateString())
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => showMode('date')

  return (
      <>
        <Container>
            <TitleHistoric>Histórico de doações</TitleHistoric>
            <DescHistoric>Aqui você pode visualizar o seu histórico de doações. Basta preencher corretamente os campos abaixo.</DescHistoric>
            <ContainerForm>
            <ButtonDate onPress={showDatepicker}>
              <Icon name="calendar" size={18}/>
              <TextButtonDate>Selecione a data</TextButtonDate>
            </ButtonDate>
              <ContainerInputs>
                  <ButtonAdd onPress={Teste}>
                <TextButtonAdd>Adicionar</TextButtonAdd>
              </ButtonAdd>
              </ContainerInputs>
              
            </ContainerForm>
          <HistoricLists />
        </Container>
      </>
  );
}


export default _Historic;