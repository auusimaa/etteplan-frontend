import { React, useState, useEffect} from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import DropdownMenu from "./components/DropdownMenu";
import Cards from './components/Cards';


const Container = styled.div`

  background: #F8F9FA;
  min-height: 100vh;
  height: 100%;

`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 370px;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default function App() {

  const [data, setData] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Fetch data
  useEffect(() => {
    (async () => {
      const api = {
        base: 'http://api.openweathermap.org/data/2.5/',
        key: process.env.REACT_APP_API_KEY,
      };
      const cityID = {
        'Helsinki': 658225,
        'Jyväskylä': 655195,
        'Kuopio': 650225,
        'Tampere': 634964,
      };

      let tempData = [];
      let tempForecast = [];

      // Fetch data for every location
      for (const city in cityID) {

        // Fetch current weather
        const response = await fetch(`${api.base}weather?id=${cityID[city]}&appid=${api.key}`);
        const data = await response.json();
        tempData.push(data);

        let lat = data.coord.lat;
        let lon = data.coord.lon;

        // Fetch hourly forecast
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&appid=${api.key}`);
        const forecastData = await forecastResponse.json();
        tempForecast.push(forecastData);
      }

      setTimeout(() => {
        setData(tempData);
        setForecast(tempForecast);
        setIsLoading(false);
      }, 3000);

    })();
  }, []);

  // Hides city cards based on dropdown selection
  const handleSelection = (city) => {
    const cards = [];
    for (let i = 1; i < 5; i++) {
      cards.push(document.getElementById(`cards-${i}`));
    };
    cards.forEach(card => {
      card.style.display = 'none';
    });
    switch (city) {
      case 'H': 
        cards[0].style.display = 'block';
        break;
      case 'J': 
        cards[1].style.display = 'block';
        break;
      case 'K': 
        cards[2].style.display = 'block';
        break;
      case 'T': 
        cards[3].style.display = 'block';
        break;
      default: cards.forEach(card => {
        card.style.display = 'block';
      });
    }
  };
  
  return (
    <Container>
      <Header/>
      <ContentWrapper>
        <DropdownMenu onSelectionChange={(e) => {handleSelection(e)}} ></DropdownMenu>
        {isLoading ? 'Loading...' :
          <CardsWrapper>
            {data.map((item, idx) => {
              return <Cards
                id={`cards-${idx + 1}`}
                city={item.name}
                icon={item.weather[0].icon}
                temp={item.main.temp}
                description={item.weather[0].description}
                wind={item.wind.speed}
                humidity={item.main.humidity}
                rain={item.rain ? item.rain['3h'] : ''}
                hourlyData={forecast[idx].hourly} />
            })}
          </CardsWrapper>
          }
      </ContentWrapper>
    </Container>
  )
};
