import styled from 'styled-components/native';

export const Container = styled.View`
    position: absolute;
    height: 100%;
    width: 100%;
    background: #fff;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ButtonCloseModal = styled.TouchableOpacity`
    position: absolute;
    top: 7%;
    right: 5%;
`

export const Form = styled.SafeAreaView`
    width: 100%;
    margin: 0 10px;
    justify-content: center;
`
export const Selected = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 15px;
`

export const Input = styled.TextInput`
    background: #ddd;
    width: 90%;
    border: transparent;
    padding:10px;
    align-self: center;
`

export const TitleForm = styled.Text`
    font-size: 23px;
    font-family: Alata;
    font-weight: bold;
    margin: 5px 20px;
    text-align: left;
    text-transform: uppercase;
    color: #444;
`
export const Intro = styled.Text`
    font-size: 16px;
    font-family: Alata;
    margin: 5px 20px;
    padding-bottom: 20px;
`
export const Label = styled.Text`
    font-size: 17px;
    font-family: Alata;
    font-weight: bold;
    margin: 5px 20px;
    text-align: left;
    text-transform: uppercase;
`
export const TypeText = styled.Text`
    font-size: 17px;
    font-family: Alata;
`
export const Button = styled.TouchableOpacity`
    width: 130px;
    background: #343a40;
    padding: 6px 10px;
    margin: 10px 20px;
    border-radius: 5px;
    align-items: center;
`
export const TextButton = styled.Text`
    font-size: 17px;
    font-family: Alata;
    color: #fff;
    
`
