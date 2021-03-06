import styled from "styled-components";

export const StyledMain = styled.main`
  background-color: #000;
  color: #FFF;
  height: 33%;
  padding: 30px 20px;
  display: flex;
  overflow-x: scroll;
  gap: 40px;
  @media(min-width:500px){

    flex-direction: column;
    overflow-x: hidden;
    align-items: center;
  }
`