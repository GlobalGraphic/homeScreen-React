import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';

const Clock = (props) => {

    return (
        <Container className="container">
                <h1>{props.message}</h1>
                <p>How can I help you ?</p>
                <h2>{props.time}</h2>
        </Container>
    );
}

export default Clock;