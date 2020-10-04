import styled from 'styled-components/native';

export const Container = styled.View`
    position: absolute;
    z-index: 999;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #F8F4F4;
`;

export const Containerform = styled.View`
  display: flex;
  flex-direction: column;
  margin: 0 10%;
  margin-top: 50%;
`;

export const ModalTop = styled.View`
    position: absolute;
    top: 50px;
    left: 20px;
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
    background: rgb(243, 206, 206);
    margin: 5px 0;
    padding: 10px 15px;
    color: #000;
    font-size: 16px;
    border-radius: 5px;
    width: 100%;
`;

export const InputModalCadPass = styled.TextInput`
    background: rgb(243, 206, 206);
    margin: 4px 7px;
    margin-left: 0;
    padding: 10px 15px;
    color: #000;
    font-size: 16px;
    border-radius: 5px;
    width: 160px;
`;

export const InputModalCadPassAge = styled.TextInput`
    background: rgb(243, 206, 206);
    margin: 4px 7px;
    margin-left: 0;
    padding: 10px 15px;
    color: #000;
    font-size: 16px;
    border-radius: 5px;
    width: 80px;
`;
export const InputModalCadPassCpf = styled.TextInput`
    background: rgb(243, 206, 206);
    margin: 4px 7px;
    margin-left: 0;
    padding: 10px 15px;
    color: #000;
    font-size: 16px;
    border-radius: 5px;
    width: 241px;
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
    max-width: 150px;
`