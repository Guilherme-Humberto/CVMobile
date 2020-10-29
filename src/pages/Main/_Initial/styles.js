import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 20%;
  padding: 5%;
`;

export const TitleMain = styled.Text`
  font-size: 30px;
  font-family: Alata;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const DescMain = styled.Text`
  font-size: 16px;
  font-family: Alata;
  max-width: 350px;
  text-align: left;
`;

export const ImageMain = styled.Image`
    width: 350px;
    height: 300px;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
`;

export const ContainerButtonInitial = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 5% 10%;

`;

export const ButtonCad = styled.TouchableOpacity`
  width: 150px;
  margin: 0 10px;
  flex-direction: row;
  background: #E26868;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  elevation: 10;
`;

export const TextButtonCad = styled.Text`
  font-size: 17px;
  text-align: center;
  padding: 10px;
  color: #fff;
  font-family: Alata;
  font-weight: bold;
`;

export const ButtonLog = styled.TouchableOpacity`
  width: 100px;
  margin: 0 10px;
  border-width: 2px;
  border-color: #000;
  border-radius: 5px;
  background: transparent;
`;
export const TextButtonLog = styled.Text`
  font-size: 17px;
  text-align: center;
  padding: 10px;
  font-family: Roboto;
  font-weight: bold;
`;