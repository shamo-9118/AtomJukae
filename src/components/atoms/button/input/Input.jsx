import styled from "styled-components"
import {PrimaryButton} from "../PrimaryButton"

export const Input =(props)=>{
  const { placeholder= "検索条件を入力" } = props
  return(
    <>
    <SContainer>
    <SInput type="text" placeholder={placeholder}></SInput>
    <PrimaryButton>検索</PrimaryButton>
    </SContainer>
    </>
  )
}
const SContainer = styled.div`

`;

const SInput = styled.input`
  padding: 8px 16px;
  border: sorid #ddd 1px;
  border-radius: 2222px;
  outline: noen;
  border-style: none;
`;