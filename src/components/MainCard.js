import React from 'react';
import styled from 'styled-components'

const MainWrapper = styled.div`

  margin: 5px 15px;
  background: #fff;
  border: solid 1px #E6E6E6;
  border-radius: 5px;
  padding: 15px 15px;  

`;

const TitleWrapper = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;

`;

const InfoWrapper = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-between;

`;

const WeatherWrapper = styled.div`

display: flex;
flex-direction: row;
justify-content: space-between;

`;

const DateWrapper = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: end;

`;

const Title = styled.p`
  font-family: Arial;
  font-size: 19px;
  font-weight: 100;
  color: #262626;
  margin: 0px;
`;

const InfoLabel = styled.p`
  font-family: Arial;
  font-size: 13px;
  font-weight: 100;
  color: #70757A;
  margin: 0px;
`;

const DateLabel = styled.p`
  font-family: Arial;
  font-size: 15px;
  font-weight: 100;
  color: #262626;
  margin: 0px;
`;

const Temperature = styled.p`

  font-family: Arial;
  font-size: 26px;
  font-weight: 100;
  color: #262626;
  margin: 0px;

`;

export default function MainCard(props) {

  // Function to get correct ordial for dates
  const nth = (day) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }

  const parseDate = () => {
    const unixDate = new Date();
    const date = unixDate.getDate();
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][unixDate.getMonth()];
    const hours = unixDate.getHours();
    const minutes = unixDate.getMinutes();

    return ([`${month} ${date}${nth(date)}`, `${hours}:${minutes}`]);

  }

  return (
    <MainWrapper>
      <TitleWrapper>
        <div>
          <Title>{props.city === 'Jyvaskyla' ? 'Jyväskylä' : props.city}</Title>
          <InfoLabel>{props.description}</InfoLabel>
        </div>
        <WeatherWrapper>
          <img alt={'weather-icon'} src={`http://openweathermap.org/img/w/${props.icon}.png`} ></img>
          <Temperature>
            <span>{Math.round((props.temp - 273.15) * 10) / 10}</span> °C
          </Temperature>
        </WeatherWrapper>
      </TitleWrapper>
      <InfoWrapper>
        <DateWrapper>
          <DateLabel>{parseDate()[0]}</DateLabel>
          <InfoLabel>{parseDate()[1]}</InfoLabel>
        </DateWrapper>
        <div>
          <InfoLabel>Wind: <span>{props.wind}</span> m/s</InfoLabel>
          <InfoLabel>Humidity: <span>{props.humidity}</span> %</InfoLabel>
          <InfoLabel>Percipitation (3h): <span>{props.rain}</span>{props.rain ? ' mm' : '-'}</InfoLabel>
        </div>
      </InfoWrapper>
    </MainWrapper>
  )
}
