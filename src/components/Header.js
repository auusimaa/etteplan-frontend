import React from 'react';
import styled from 'styled-components';


const HeaderContainer = styled.div`

  display: flex;
  margin-bottom: 5px;
  border-bottom: 1px solid #E6E6E6;
  background: #fff;
  align-items: center;
  justify-content: center;
  height: 50px;

`;

const HeaderTitle = styled.p`
  margin: 0px;
  color: #262626;
  font-family: Arial;
  font-weight: 100;
  font-size: 23px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>
        Säätutka
      </HeaderTitle>
    </HeaderContainer>
  )
}
