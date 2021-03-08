import React from 'react'
import styled from 'styled-components';

const CardWrapper = styled.div`
  background: #fff;
  width: 19%;
  border: solid 1px #E6E6E6;
  border-radius: 5px; 
`;

const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-bottom: solid 1px #E6E6E6;

`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #E5F6FD;
  padding: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;  
`;

const StyledP = styled.p`

  margin: 0;
  color: #70757A;
  font-family: Arial;
  font-weight: 100;
  font-size: ${props => props.fontSize};

`;

export default function ForecastCard(props) {

  const parseDate = (unixTime) => {
    const date = new Date(unixTime * 1000);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();

    const formattedTime = `${hours}:${minutes.substr(-2)}`;

    return formattedTime;
  }

  return (
    <CardWrapper id={props.id}>
      <WeatherWrapper>
        <StyledP fontSize='13px' >{parseDate(props.time)}</StyledP>
          <img alt={'weather-icon'} src={`http://openweathermap.org/img/w/${props.icon}.png`} ></img>
        <StyledP fontSize='15px' >
          <span>{Math.round((props.temp - 273.15) * 10) / 10}</span> °C
        </StyledP>
      </WeatherWrapper>
      <InfoWrapper>
        <StyledP fontSize='10px' ><span>{props.wind}</span> m/s</StyledP>
        <StyledP fontSize='10px' ><span>{props.humidity}</span> %</StyledP>
        <StyledP fontSize='10px' ><span>{props.rain}</span>{props.rain ? ' mm' : '-'}</StyledP>
      </InfoWrapper>
    </CardWrapper>
  )
}
