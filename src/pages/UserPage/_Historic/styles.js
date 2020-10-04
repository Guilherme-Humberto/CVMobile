import styled from 'styled-components/native';
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: "rgb(243, 241, 241)",
    width: 120,
    margin: 7,
    height: 35,
    elevation: 5
  }
})

export const Container = styled.View`
  flex-direction: column;
  justify-content: center;
  margin: 15% 5%;
`;

export const TitleHistoric = styled.Text`
  font-size: 25px;
  font-family: Alata;
  font-weight: bold;
  padding: 10px;
`;

export const DescHistoric = styled.Text`
  font-size: 14px;
  font-family: Alata;
  font-weight: bold;
  margin-bottom: 5%;
  padding: 10px;
`;

export const ContainerForm = styled.View`
  flex-direction: column;
  justify-content: center;
  margin: 0 5%;
  
`
export const ContainerInputs = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  
`
export const InputLocal = styled.TextInput`
  background: rgb(243, 241, 241);
  width: 49%;
  font-size: 12px;
  font-weight: bold;
  margin: 7px;
  padding: 4px 10px;
  elevation: 5;
`
export const ButtonDate = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: rgb(243, 241, 241);
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  elevation: 5;
`
export const TextButtonDate = styled.Text`
  font-size: 12px;
  font-weight: bold;
  padding: 0 10px;
`

export const ButtonAdd = styled.TouchableOpacity`
  background: lightcoral;
  width: 80px;
  margin: 10px 0;
  border-radius:5px;
  elevation: 5;
`
export const TextButtonAdd = styled.Text`
  font-size: 12px;
  font-family: Alata;
  color: #fff;
  font-weight: bold;
  text-align: center;
  padding: 10px
`