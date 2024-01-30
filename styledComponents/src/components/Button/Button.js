import styled from "styled-components";

export const Btn = styled.TouchableOpacity`
    border-width:3px;
    border-color: white;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    width: 40%;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: black;
`
export const DecrementBtn = styled(Btn)`
    background-color: white;
    border-color: black;
`
export const BtnText = styled.Text`
    color: white;
    font-size: 20px;
    font-family: 'Inter_600SemiBold';
`
export const DrecrementText = styled(BtnText)`
    color: black;
`