import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';

const Search = () => {
    
    return (
        <Container>
            <form action="https://www.google.com/search" method="get" id="search-form" target="_blank">
                <input type="text" name="q" placeholder="Search Google..." autoComplete="off" autoFocus/>
                <button type="button"><i class="fas fa-microphone"></i></button>
            </form>
        </Container>
    );
}


export default Search;