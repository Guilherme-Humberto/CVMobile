import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  justify-content: center;
  margin: 10% 5%;
  height: 100%;
`;

export const ContainerIcons = styled.View`
  margin-top: 5%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ImageGifTOp = styled.Image`
  height: 300px;
  width: 300px;
  margin: 0 auto;
`

export const TextIcon = styled.Text`
  font-size: 14px;
  font-family: Alata;
  color: green;
`

export const TitleCampTop = styled.Text`
  font-size: 25px;
  font-family: Alata;
  font-weight: bold;
  padding: 10px;
`;

export const DescCampTop = styled.Text`
  font-size: 14px;
  font-family: Alata;
  font-weight: bold;
  margin-bottom: 5%;
  padding: 10px;
`;

export const CardCampaings = styled.View`
  margin-bottom: 5%;
  background: rgb(243, 241, 241);
  justify-content: center;
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  elevation: 10;
`
export const TitleCard = styled.Text`
  font-size: 23px;
  font-family: Alata;
`
export const DescCard = styled.Text`
  font-size: 14px;
  font-family: Alata;
`