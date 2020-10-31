import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import Icon2 from 'react-native-vector-icons/AntDesign'
import { CheckBox, Picker, Icon } from 'native-base'
import DateTimePicker from '@react-native-community/datetimepicker';
import Fetcher from '../../../hooks/Fetcher'
import api from '../../../service/api';

import { 
  Container,
  ButtonCloseModal,
  Form,
  TitleForm,
  Intro,
  Label,
  Selected,
  Element,
  TypeText,
  ButtonAddHist,
  TextButton,
  Teste,
  ButtonOpenCalendar,
  TextButtonCalendar
} from './styles';

const ModalAddHistoric = ({ buttonCloseModal, id }) => {
  const [local, setLocal] = useState('')
  const [typeDonation, setTypeDonation] = useState('')
  const [sangue, setSangue] = useState(false)
  const [plaqueta, setPlaqueta] = useState(false)

  const [date, setDate] = useState(new Date(Date.now()));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
 
  const onChange = (selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
 
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => showMode('date');

  const validateInfos = () => {
    if(typeDonation === "") {
      alert("Selecine um tipo de doação")
    }
    else if (local === "") {
      alert("Selecine um local de doação")
    }
  }

  const { data } = Fetcher("institutions")

  async function handleSubmit() {
    validateInfos()
    await api.post(`/historic/${id}`, {
      local,
      date: date.toLocaleDateString(),
      typeDonation
    })
    .then(() => buttonCloseModal())
    .catch((err) => console.log(err))
  }

  if(!data) return <Text>Carregando...</Text>

  return (
    <Container>
      <ButtonCloseModal onPress={buttonCloseModal}>
        <Icon2 name="close" size={40}/>
      </ButtonCloseModal>
      <Form>
        <TitleForm>Adicionar nova doação</TitleForm>
        <Intro>
          Preencha as informações abaixo para adicionar uma nova doação.
        </Intro>
        
        <Label>local</Label>
        <Teste>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          note={false}
          selectedValue={local}
          onValueChange={(e) => setLocal(e)}
        >
          {data.map((item) => (
            <Picker.Item 
              key={item._id} 
              label={item.name} 
              value={item.name} 
            />
          ))}
        </Picker>
        </Teste>

        <Selected>
          <Element>
            <CheckBox 
              checked={sangue} 
              color={"#444"} 
              onPress={() => {
                setSangue(true)
                setPlaqueta(false)
                setTypeDonation("Sangue")
              }}
            />
            <TypeText>Sangue</TypeText>
          </Element>
          <Element>
            <CheckBox 
              checked={plaqueta} 
              color={"#444"} 
              onPress={() => {
                setPlaqueta(true)
                setSangue(false)
                setTypeDonation("Plaqueta")
              }}
            />
            <TypeText>Plaqueta</TypeText>
          </Element>
          <View
            style={{
              borderLeftWidth: 'black',
              borderLeftWidth: 2,
              height: 20,
              marginHorizontal: 20
            }}
          />
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          <View>
            <ButtonOpenCalendar onPress={showDatepicker} title="Show date picker!">
              <Icon2 name="calendar" size={25}/>
              <TextButtonCalendar>Data</TextButtonCalendar>
            </ButtonOpenCalendar>
          </View>
        </Selected>

        <ButtonAddHist onPress={handleSubmit}>
          <TextButton>Adicionar</TextButton>
        </ButtonAddHist>
      </Form>


    </Container>
  );
};

export default ModalAddHistoric;