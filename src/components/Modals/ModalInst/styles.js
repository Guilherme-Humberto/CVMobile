import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  position: absolute;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
  background: #eee;
`;

export const ButtonCloseModal = styled.TouchableOpacity`
  background: transparent;
  border: none;
  position: absolute;
  top: 3%;
  left: 5%;
`

export const ListInst = styled.View`
  margin-top: 30%;
  padding: 0 5%;
`

export const Name = styled.Text`
  font-size: 20px;
  font-family: Alata;
  font-weight: bold;
  margin: 20px 0;
`

export const Desc = styled.Text`
  font-size: 14px;
  font-family: Alata;
`