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
  display: flex;
  width: 80%;
  flex-direction: column;
`;

export const ImageModalLog = styled.Image`
    width: 300px;
    height: 300px;
`;

export const ModalTop = styled.View`
    position: absolute;
    top: 50px;
    left: 20px;
`;

export const TitleModalLog = styled.Text`
    font-size: 35px;
    font-family: Alata;
    font-weight: bold;
    margin: 5px 0;
`;

export const DescModalLog = styled.Text`
    font-size: 16px;
    font-family: Alata;
    margin: 10px 0;
`;

export const InputModalLog = styled.TextInput`
    background: transparent;
    margin: 5px 0;
    padding: 10px 15px;
    color: #000;
    font-size: 16px;
    border-radius: 5px;
    border: 2px solid #000;
    width: 100%;
`;

export const ButtonForgot = styled.TouchableOpacity`
    background: transparent;
    width: 200px;
`;
export const TextButtonForgot = styled.Text`
    font-size: 14px;
    font-weight: bold;
    padding: 2px 5px;
    font-family: Alata;
    margin: 10px 0;
`;

export const ButtonAcess = styled.TouchableOpacity`
    background: #E26868;
    justify-content: center;
    align-items: center;
    width: 150px;
    flex-direction: row;
    border-radius: 5px;
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

export const ButtonNav = styled.TouchableOpacity``
export const TextButton = styled.Text``