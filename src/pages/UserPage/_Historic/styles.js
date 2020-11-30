import styled from "styled-components/native";

export const Container = styled.ScrollView``;

export const TitleHistoric = styled.Text`
  font-size: 30px;
  font-family: Alata;
  font-weight: bold;
  padding: 5px;
  color: #fff;
  text-align: center;
`;

export const DescHistoric = styled.Text`
  font-size: 16px;
  font-family: Alata;
  font-weight: bold;
  margin-bottom: 5%;
  padding: 5px;
  color: #fff;
  text-align: center;
`;

export const Header = styled.View`
  background: #ff686b;
  padding-top: 15%;
  padding-bottom: 8%;
  align-items: center;
`;
export const Button = styled.TouchableOpacity`
  background: transparent;
  border: 2px solid #fff;
  padding: 10px 30px;
  border-radius: 25px;
`;
export const TextButton = styled.Text`
  font-size: 16px;
  font-family: Roboto;
  font-weight: bold;
  color: #fff;
`;
export const ContainerHeader = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TitleHeader = styled.Text`
  font-size: 25px;
  font-family: Alata;
  font-weight: bold;
`;

export const TextHeader = styled.Text`
  font-size: 18px;
  font-family: Alata;
  text-align: center;
  margin: 0 10px;
`;

export const ButtonAddDonation = styled.TouchableOpacity`
  width: 150px;
  padding: 5px 10px;
  background: #e26868;
  border-radius: 5px;
  align-items: center;
  margin: 20px 0;
`;

export const TextButtonDonation = styled.Text`
  font-size: 18px;
  font-family: Alata;
  color: #fff;
`;
export const List = styled.View`
  margin-top: 10px;
`;
export const Card = styled.View`
  padding: 40px 20px;
  margin: 20px;
  background: transparent;
  border: 2px solid #444;
`;

export const Infos = styled.View`
  flex-direction: row;
  align-items: center;
`;

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
`;
