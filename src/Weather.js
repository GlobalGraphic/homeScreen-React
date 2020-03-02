import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';

const Weather = ({ city, weather }) => {

    return (
        <Container>
            <p className="weather"><i class="far fa-compass"></i>{city} / {weather} °C</p>
        </Container>
    );

}

export default Weather;