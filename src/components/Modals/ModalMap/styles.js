import styled from 'styled-components/native';

export const Container = styled.View`
    position: absolute;
    z-index: 10;
    top: 0;
    height: 100%;
    width: 100%;
    background: #eee;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ButtonCloseModal = styled.TouchableOpacity`
    position: absolute;
    top: 10%;
    left: 5%;
`
export const Content = styled.View`
    padding: 5%;
`

export const ContainerInst = styled.View``

export const Name = styled.Text`
    font-size: 25px;
    font-family: Alata;
`

export const TextInst = styled.Text`
    font-size: 15.5px;
    font-family: Alata;
    margin: 10px 0;
`

export const Info = styled.Text`
    font-size: 16px;
    font-family: Alata;
`