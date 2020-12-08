import React, { useState } from "react";
import { Text } from 'react-native'
import Icon2 from "react-native-vector-icons/AntDesign";
import { CheckBox, Picker, Icon, View } from "native-base";
import DatePicker from "react-native-datepicker";

import Fetcher from "../../../hooks/Fetcher";
import api from "../../../service/api";

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
  ContainerPicker,
  MessageError
} from "./styles";

const ModalAddHistoric = ({ buttonCloseModal, id }) => {
  const [local, setLocal] = useState("Selecione um local");
  const [typeDonation, setTypeDonation] = useState("");
  const [sangue, setSangue] = useState(false);
  const [plaqueta, setPlaqueta] = useState(false);
  const [date, setDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateInfos = () => {
    if (!typeDonation || !local || !data) {
      setErrorMessage("Preencha todas as informações");
    }
  };

  const { data } = Fetcher("institutions");

  async function handleSubmit() {
    try {
      validateInfos();
      await api
        .post(`/historic/${id}`, {
          local,
          date,
          typeDonation,
        })
        .then((res) => {
          const { error } = res.data
          console.log(res)
          if(!error) buttonCloseModal()
          
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err.message);
    }
  }

  if (!data) return null;

  return (
    <Container>
      <ButtonCloseModal onPress={buttonCloseModal}>
        <Icon2 name="close" size={40} />
      </ButtonCloseModal>
      <Form>
        <TitleForm>Adicionar nova doação</TitleForm>
        <Intro>
          Preencha as informações abaixo para adicionar uma nova doação.
        </Intro>
        {errorMessage ? <MessageError>{errorMessage}</MessageError>: null}
        <Label>local</Label>
        <ContainerPicker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            note={false}
            selectedValue={local}
            onValueChange={(e) => setLocal(e)}
          >
            {data.map((item) => (
              <Picker.Item key={item._id} label={item.name} value={item.name} />
            ))}
          </Picker>
        </ContainerPicker>

        <Selected>
          <Element>
            <CheckBox
              checked={sangue}
              color={"#444"}
              onPress={() => {
                setSangue(true);
                setPlaqueta(false);
                setTypeDonation("Sangue");
              }}
            />
            <TypeText>Sangue</TypeText>
          </Element>
          <Element>
            <CheckBox
              checked={plaqueta}
              color={"#444"}
              onPress={() => {
                setPlaqueta(true);
                setSangue(false);
                setTypeDonation("Plaqueta");
              }}
            />
            <TypeText>Plaqueta</TypeText>
          </Element>

          <DatePicker
            date={date}
            style={{ width: 100 }}
            mode="date"
            format="DD-MM-YYYY"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                height: 50,
                width: 50,
              },
              dateInput: {
                display: "none",
              },
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => setDate(date)}
          />
        </Selected>

        <ButtonAddHist onPress={handleSubmit}>
          <TextButton>Adicionar</TextButton>
        </ButtonAddHist>
      </Form>
    </Container>
  );
};

export default ModalAddHistoric;
