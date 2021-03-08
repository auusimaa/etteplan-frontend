import { React, useState, useEffect} from 'react';
import axios from 'axios';
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

export default function App() {
  const api = {
    base: 'http://api.openweathermap.org/data/2.5/',
    key: process.env.REACT_APP_API_KEY,
  }
  const cityID = {
    'Helsinki': 658225,
    'Jyväskylä': 655195,
    'Kuopio': 650225,
    'Tampere': 634964,
  }

  
  const weatherData = [
    {"coord": {
    "lon": -122.08,
    "lat": 37.39
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 282.55,
    "feels_like": 281.86,
    "temp_min": 280.37,
    "temp_max": 284.26,
    "pressure": 1023,
    "humidity": 100
  },
  "visibility": 16093,
  "wind": {
    "speed": 1.5,
    "deg": 350
  },
  "clouds": {
    "all": 1
  },
  "rain" : {
    "3h": 12
  },
  "dt": 1560350645,
  "sys": {
    "type": 1,
    "id": 5122,
    "message": 0.0139,
    "country": "US",
    "sunrise": 1560343627,
    "sunset": 1560396563
  },
  "timezone": -25200,
  "id": 658225,
  "name": "Helsinki",
  "cod": 200
  },
  {
    "coord": {
      "lon": -122.08,
      "lat": 37.39
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 282.55,
      "feels_like": 281.86,
      "temp_min": 280.37,
      "temp_max": 284.26,
      "pressure": 1023,
      "humidity": 100
    },
    "visibility": 16093,
    "wind": {
      "speed": 1.5,
      "deg": 350
    },
    "clouds": {
      "all": 1
    },
    "dt": 1560350645,
    "sys": {
      "type": 1,
      "id": 5122,
      "message": 0.0139,
      "country": "US",
      "sunrise": 1560343627,
      "sunset": 1560396563
    },
    "timezone": -25200,
    "id": 655195,
    "name": "Jyväskylä",
    "cod": 200
    },
    {
      "coord": {
        "lon": -122.08,
        "lat": 37.39
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 282.55,
        "feels_like": 281.86,
        "temp_min": 280.37,
        "temp_max": 284.26,
        "pressure": 1023,
        "humidity": 100
      },
      "visibility": 16093,
      "wind": {
        "speed": 1.5,
        "deg": 350
      },
      "clouds": {
        "all": 1
      },
      "dt": 1560350645,
      "sys": {
        "type": 1,
        "id": 5122,
        "message": 0.0139,
        "country": "US",
        "sunrise": 1560343627,
        "sunset": 1560396563
      },
      "timezone": -25200,
      "id": 650225,
      "name": "Kuopio",
      "cod": 200
      },
      {
        "coord": {
          "lon": -122.08,
          "lat": 37.39
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "base": "stations",
        "main": {
          "temp": 282.55,
          "feels_like": 281.86,
          "temp_min": 280.37,
          "temp_max": 284.26,
          "pressure": 1023,
          "humidity": 100
        },
        "visibility": 16093,
        "wind": {
          "speed": 1.5,
          "deg": 350
        },
        "clouds": {
          "all": 1
        },
        "dt": 1560350645,
        "sys": {
          "type": 1,
          "id": 5122,
          "message": 0.0139,
          "country": "US",
          "sunrise": 1560343627,
          "sunset": 1560396563
        },
        "timezone": -25200,
        "id": 634964,
        "name": "Tampere",
        "cod": 200
        },
  ];

  const forecast = 
  {
    "lat": 33.4418,
    "lon": -94.0377,
    "timezone": "America/Chicago",
    "timezone_offset": -21600,
    "hourly": [
      {
        "dt": 1615125600,
        "temp": 279.99,
        "feels_like": 276.98,
        "pressure": 1030,
        "humidity": 75,
        "dew_point": 275.87,
        "uvi": 0.68,
        "clouds": 1,
        "visibility": 10000,
        "wind_speed": 2.08,
        "wind_deg": 79,
        "rain": {
          "1h": 12,
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615129200,
        "temp": 281.11,
        "feels_like": 277.91,
        "pressure": 1030,
        "humidity": 71,
        "dew_point": 276.18,
        "uvi": 1.87,
        "clouds": 43,
        "visibility": 10000,
        "wind_speed": 2.44,
        "wind_deg": 102,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615132800,
        "temp": 283.56,
        "feels_like": 280.18,
        "pressure": 1032,
        "humidity": 64,
        "dew_point": 277.05,
        "uvi": 3.48,
        "clouds": 69,
        "visibility": 10000,
        "wind_speed": 2.92,
        "wind_deg": 114,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615136400,
        "temp": 286.04,
        "feels_like": 282.12,
        "pressure": 1032,
        "humidity": 55,
        "dew_point": 277.23,
        "uvi": 4.99,
        "clouds": 79,
        "visibility": 10000,
        "wind_speed": 3.74,
        "wind_deg": 125,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615140000,
        "temp": 287.82,
        "feels_like": 283.61,
        "pressure": 1031,
        "humidity": 51,
        "dew_point": 277.8,
        "uvi": 5.79,
        "clouds": 77,
        "visibility": 10000,
        "wind_speed": 4.3,
        "wind_deg": 127,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615143600,
        "temp": 288.92,
        "feels_like": 284.93,
        "pressure": 1030,
        "humidity": 48,
        "dew_point": 278.21,
        "uvi": 5.56,
        "clouds": 14,
        "visibility": 10000,
        "wind_speed": 4.03,
        "wind_deg": 133,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615147200,
        "temp": 289.52,
        "feels_like": 285.85,
        "pressure": 1030,
        "humidity": 46,
        "dew_point": 278.11,
        "uvi": 4.42,
        "clouds": 7,
        "visibility": 10000,
        "wind_speed": 3.55,
        "wind_deg": 137,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615150800,
        "temp": 289.74,
        "feels_like": 286.41,
        "pressure": 1029,
        "humidity": 47,
        "dew_point": 278.39,
        "uvi": 2.79,
        "clouds": 5,
        "visibility": 10000,
        "wind_speed": 3.22,
        "wind_deg": 140,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615154400,
        "temp": 289.44,
        "feels_like": 286.26,
        "pressure": 1029,
        "humidity": 48,
        "dew_point": 278.6,
        "uvi": 1.25,
        "clouds": 3,
        "visibility": 10000,
        "wind_speed": 3.01,
        "wind_deg": 138,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615158000,
        "temp": 288.77,
        "feels_like": 286.59,
        "pressure": 1029,
        "humidity": 57,
        "dew_point": 280.47,
        "uvi": 0.37,
        "clouds": 3,
        "visibility": 10000,
        "wind_speed": 2.16,
        "wind_deg": 142,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615161600,
        "temp": 285.84,
        "feels_like": 283.37,
        "pressure": 1029,
        "humidity": 63,
        "dew_point": 279.06,
        "uvi": 0,
        "clouds": 3,
        "visibility": 10000,
        "wind_speed": 2.17,
        "wind_deg": 134,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615165200,
        "temp": 283.86,
        "feels_like": 281.04,
        "pressure": 1030,
        "humidity": 66,
        "dew_point": 277.81,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 2.31,
        "wind_deg": 131,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615168800,
        "temp": 282.92,
        "feels_like": 279.66,
        "pressure": 1031,
        "humidity": 69,
        "dew_point": 277.56,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 2.87,
        "wind_deg": 131,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615172400,
        "temp": 282.02,
        "feels_like": 278.61,
        "pressure": 1031,
        "humidity": 72,
        "dew_point": 277.36,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 3.01,
        "wind_deg": 134,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615176000,
        "temp": 281.23,
        "feels_like": 277.68,
        "pressure": 1031,
        "humidity": 75,
        "dew_point": 277.17,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 3.16,
        "wind_deg": 137,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615179600,
        "temp": 280.56,
        "feels_like": 276.95,
        "pressure": 1032,
        "humidity": 77,
        "dew_point": 276.91,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 3.18,
        "wind_deg": 139,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615183200,
        "temp": 279.95,
        "feels_like": 276.57,
        "pressure": 1031,
        "humidity": 79,
        "dew_point": 276.67,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 2.79,
        "wind_deg": 137,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615186800,
        "temp": 279.5,
        "feels_like": 276.29,
        "pressure": 1032,
        "humidity": 80,
        "dew_point": 276.38,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 2.48,
        "wind_deg": 139,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615190400,
        "temp": 279.12,
        "feels_like": 276.09,
        "pressure": 1032,
        "humidity": 81,
        "dew_point": 276.12,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 2.18,
        "wind_deg": 140,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615194000,
        "temp": 278.8,
        "feels_like": 275.77,
        "pressure": 1031,
        "humidity": 81,
        "dew_point": 275.88,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 2.1,
        "wind_deg": 137,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615197600,
        "temp": 278.55,
        "feels_like": 275.31,
        "pressure": 1031,
        "humidity": 81,
        "dew_point": 275.66,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 2.33,
        "wind_deg": 139,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615201200,
        "temp": 278.32,
        "feels_like": 274.93,
        "pressure": 1032,
        "humidity": 81,
        "dew_point": 275.43,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 2.5,
        "wind_deg": 143,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615204800,
        "temp": 278.04,
        "feels_like": 274.56,
        "pressure": 1032,
        "humidity": 81,
        "dew_point": 275.22,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 2.56,
        "wind_deg": 144,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615208400,
        "temp": 277.98,
        "feels_like": 274.68,
        "pressure": 1032,
        "humidity": 83,
        "dew_point": 275.34,
        "uvi": 0.12,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 2.37,
        "wind_deg": 146,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615212000,
        "temp": 280.45,
        "feels_like": 276.81,
        "pressure": 1033,
        "humidity": 76,
        "dew_point": 276.55,
        "uvi": 0.67,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 3.15,
        "wind_deg": 150,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615215600,
        "temp": 283.21,
        "feels_like": 280.01,
        "pressure": 1033,
        "humidity": 69,
        "dew_point": 277.8,
        "uvi": 1.83,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 2.86,
        "wind_deg": 163,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615219200,
        "temp": 285.76,
        "feels_like": 282.47,
        "pressure": 1033,
        "humidity": 62,
        "dew_point": 278.78,
        "uvi": 3.53,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 3.24,
        "wind_deg": 166,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615222800,
        "temp": 287.86,
        "feels_like": 284.38,
        "pressure": 1033,
        "humidity": 56,
        "dew_point": 279.25,
        "uvi": 5.06,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 3.67,
        "wind_deg": 167,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615226400,
        "temp": 289.33,
        "feels_like": 285.78,
        "pressure": 1032,
        "humidity": 51,
        "dew_point": 279.25,
        "uvi": 5.87,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 3.77,
        "wind_deg": 165,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615230000,
        "temp": 290.31,
        "feels_like": 286.78,
        "pressure": 1031,
        "humidity": 47,
        "dew_point": 279.21,
        "uvi": 5.56,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 3.65,
        "wind_deg": 171,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615233600,
        "temp": 290.86,
        "feels_like": 287.57,
        "pressure": 1030,
        "humidity": 48,
        "dew_point": 279.74,
        "uvi": 4.42,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 3.56,
        "wind_deg": 166,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615237200,
        "temp": 291.07,
        "feels_like": 287.88,
        "pressure": 1029,
        "humidity": 48,
        "dew_point": 280.1,
        "uvi": 2.8,
        "clouds": 1,
        "visibility": 10000,
        "wind_speed": 3.48,
        "wind_deg": 167,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615240800,
        "temp": 290.86,
        "feels_like": 287.87,
        "pressure": 1029,
        "humidity": 51,
        "dew_point": 280.67,
        "uvi": 1.28,
        "clouds": 24,
        "visibility": 10000,
        "wind_speed": 3.42,
        "wind_deg": 166,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615244400,
        "temp": 290.17,
        "feels_like": 287.97,
        "pressure": 1029,
        "humidity": 60,
        "dew_point": 282.37,
        "uvi": 0.38,
        "clouds": 22,
        "visibility": 10000,
        "wind_speed": 2.91,
        "wind_deg": 155,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615248000,
        "temp": 287.23,
        "feels_like": 284.89,
        "pressure": 1029,
        "humidity": 70,
        "dew_point": 281.93,
        "uvi": 0,
        "clouds": 34,
        "visibility": 10000,
        "wind_speed": 2.92,
        "wind_deg": 142,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615251600,
        "temp": 285.59,
        "feels_like": 283.02,
        "pressure": 1029,
        "humidity": 74,
        "dew_point": 281.22,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 2.99,
        "wind_deg": 150,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615255200,
        "temp": 285.01,
        "feels_like": 282.41,
        "pressure": 1029,
        "humidity": 77,
        "dew_point": 281.12,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 3.03,
        "wind_deg": 158,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615258800,
        "temp": 284.58,
        "feels_like": 282,
        "pressure": 1029,
        "humidity": 77,
        "dew_point": 280.71,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 2.86,
        "wind_deg": 156,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615262400,
        "temp": 284.06,
        "feels_like": 281.1,
        "pressure": 1029,
        "humidity": 77,
        "dew_point": 280.37,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 3.25,
        "wind_deg": 150,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615266000,
        "temp": 283.84,
        "feels_like": 280.93,
        "pressure": 1029,
        "humidity": 79,
        "dew_point": 280.36,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 3.23,
        "wind_deg": 158,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615269600,
        "temp": 284.07,
        "feels_like": 280.81,
        "pressure": 1029,
        "humidity": 80,
        "dew_point": 280.84,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 3.86,
        "wind_deg": 166,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615273200,
        "temp": 284.05,
        "feels_like": 281.27,
        "pressure": 1028,
        "humidity": 85,
        "dew_point": 281.75,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 3.48,
        "wind_deg": 177,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615276800,
        "temp": 283.97,
        "feels_like": 281.34,
        "pressure": 1028,
        "humidity": 89,
        "dew_point": 282.37,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 3.48,
        "wind_deg": 175,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615280400,
        "temp": 283.84,
        "feels_like": 281.14,
        "pressure": 1028,
        "humidity": 91,
        "dew_point": 282.57,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 3.65,
        "wind_deg": 172,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615284000,
        "temp": 284.03,
        "feels_like": 281.25,
        "pressure": 1027,
        "humidity": 91,
        "dew_point": 282.67,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 3.83,
        "wind_deg": 171,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615287600,
        "temp": 284.03,
        "feels_like": 280.92,
        "pressure": 1027,
        "humidity": 90,
        "dew_point": 282.52,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 4.25,
        "wind_deg": 166,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615291200,
        "temp": 283.79,
        "feels_like": 281.06,
        "pressure": 1027,
        "humidity": 90,
        "dew_point": 282.26,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 3.61,
        "wind_deg": 167,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1615294800,
        "temp": 283.38,
        "feels_like": 280.96,
        "pressure": 1028,
        "humidity": 91,
        "dew_point": 282.11,
        "uvi": 0.07,
        "clouds": 84,
        "visibility": 10000,
        "wind_speed": 3.09,
        "wind_deg": 165,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      }
    ]
  }

  const items = [];
  
  // useEffect(() => {
  // }, []);
  // for (const city in cityID) {
  //   fetch(`${api.base}weather?id=${cityID[city]}&appid=${api.key}`).then(res => res.json()).then(data => weatherData.push(data)).catch(err => console.log(err));
  // };
  // console.log(weatherData);
  for (let i = 0; i < weatherData.length; i++) {
    items.push(<Cards id={`cards-${i+1}`} city={weatherData[i].name} icon={weatherData[i].weather[0].icon} temp={weatherData[i].main.temp} description={weatherData[i].weather[0].description} wind={weatherData[i].wind.speed} humidity={weatherData[i].main.humidity} rain={weatherData[i].rain ? weatherData[i].rain['3h'] : ''} hourlyData={forecast.hourly} />)
  };
  console.log(items);


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

  // useEffect(() => {
  //   try {
  //     setInterval( async () => {
  //       for (const city in cityID) {
  //         const result = await axios(
  //           `${api.base}weather?id=${cityID[city]}&appid=${api.key}`
  //         );
  //         weatherData.push(result.data);
  //       };
  //       console.log(weatherData);
  //     }, 10000);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // });
  return (
    <Container>
      <Header/>
      <ContentWrapper>
        <DropdownMenu onSelectionChange={(e) => {handleSelection(e)}} ></DropdownMenu>
        {items}
      </ContentWrapper>
    </Container>
  )
};
