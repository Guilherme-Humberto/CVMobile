import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 5%;
`;

export const Card = styled.View`
  padding: 30px 20px;
  margin: 5px 20px;
  background: transparent;
  border: 2px solid #444;
`;

export const Infos = styled.View`
  flex-direction: row;
  align-items: center;
`

export const InfoLocal = styled.Text`
  font-family: Alata;
  font-size: 20px;
  margin: 5px 0;
  color: #444;
`;

export const InfoDate = styled.Text`
  font-family: Alata;
  font-size: 15px;
  font-weight: bold;
  color: #444;
`;

export const InfoType = styled.Text`
  font-family: Alata;
  font-size: 15px;
  font-weight: bold;
  color: #444;
  text-transform: uppercase;
  margin: 0 5px;
`;

export const ButtonDelete = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  background: #f15156;
  padding: 10px;
  border-radius: 100px;
  top: -20%;
  right: -3%;
`