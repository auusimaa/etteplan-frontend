import React from 'react';
import ForecastCard from './ForecastCards';

import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 15px;
  justify-content: space-between;
`;

export default function Forecast(props) {

  const hourlyData = props.hourlyData;

  const items = [];

  for (let i = 0; i < 15; i += 3) {
    items.push(<ForecastCard id={`forecast-card-${i}`} time={hourlyData[i].dt} icon={hourlyData[i].weather[0].icon} temp={hourlyData[i].temp} wind={hourlyData[i].wind_speed} humidity={hourlyData[i].humidity} rain={hourlyData[i].rain ? hourlyData[i].rain['1h'] : ''} />)
  }

  return (
    <CardWrapper>
      {items}
    </CardWrapper>
  )
}
