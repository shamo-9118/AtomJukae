import styled from "styled-components"

export const SButton = styled.button`
background-color: #40514e;
  background: #40514e;
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 555px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const SecondaryButton = (props) =>{
  return(
    <SButton>{props.children}</SButton>
  )
}