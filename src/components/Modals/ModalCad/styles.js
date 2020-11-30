import styled from 'styled-components/native';

export const Container = styled.View`
    position: absolute;
    z-index: 999;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #F8F4F4;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Containerform = styled.SafeAreaView`
  flex-direction: column;
  padding-left: 6%;
  width: 400px;
`;

export const TitleModalCad = styled.Text`
    font-size: 35px;
    font-family: Alata;
    font-weight: bold;
    margin: 5px 0;
`;

export const DescModalCad = styled.Text`
    font-size: 16px;
    font-family: Alata;
    margin: 10px 0;
`;

export const InputModalCad = styled.TextInput`
    background: transparent;
    margin: 5px 0;
    padding: 10px 15px;
    color: #000;
    font-size: 16px;
    border-radius: 5px;
    border: 2px solid #000;
    width: 350px;
`;

export const ButtonAcess = styled.TouchableOpacity`
    background: #E26868;
    justify-content: center;
    align-items: center;
    width: 150px;
    margin-top: 10px;
    flex-direction: row;
    border-radius: 25px;
`;

export const TextButtonAcess = styled.Text`
    font-weight: bold;
    padding: 3px 0;
    font-family: Roboto;
    margin: 10px;
    color: #fff;
    font-size: 14px;
`;

export const InputsPassword = styled.View`
    flex-direction: row;
    width: 100%;
`

export const ButtonNav = styled.TouchableOpacity`
    top: 8%;
    left: 5%;
    padding: 10px;
    position: absolute;
`

export const MessageError = styled.Text`
    color: red;
    font-weight: bold;
    font-family: Alata;
`