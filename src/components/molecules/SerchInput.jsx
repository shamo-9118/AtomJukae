import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { Input } from "../../components/atoms/button/input/Input"
import styled from "styled-components"


export const SerchInput =()=>{
  return(
    <div>
      <SContaner>
      <Input placeholder="検索条件を入力"/>
      <SButtonWrapper>
      <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
      </SContaner>
    </div>
    
  )
}

const SButtonWrapper = styled.div`
  padding-left: 8px;
`
const SContaner = styled.div`
  display: flex;
  align-items: centet;
`