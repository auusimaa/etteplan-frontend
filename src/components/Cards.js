import React from 'react';
import MainCard from './MainCard';
import Forecast from './Forecast';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
`;

export default function Cards(props) {
  return (
    <Wrapper id={props.id}>
      <MainCard city={props.city} icon={props.icon} temp={props.temp} description={props.description} wind={props.wind} humidity={props.humidity} rain={props.rain} />
      <Forecast hourlyData={props.hourlyData} />      
    </Wrapper>
  )
}
