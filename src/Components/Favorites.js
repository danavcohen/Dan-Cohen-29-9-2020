import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Container, CardDeck, Row, Col } from 'react-bootstrap';
import YellowCard from './YellowCard';
import { Link } from 'react-router-dom';
import { setCurrentCity } from '../store/actions';

const Favorites = () => {
    const favorites = useSelector((state) => state.favorites);
    const isCelsius = useSelector(state => state.isCelsius);
    const dispatch = useDispatch();
    return (

        <CardDeck className="favorites--card-deck">
            <Container>
                <Row className="favorites--card-deck--row">
                    {
                        favorites && favorites.map(fav => (
                            <Col key={fav.key} md={4} lg={2} sm={8} style={{ paddingTop: '10px' }}>
                                <YellowCard className="favorites--card-deck--yellow-box">
                                    <Link to="/" onClick={() => dispatch(setCurrentCity(fav.name))} >
                                        <Card.Body>
                                            <Card.Title as="h6" className="favorites--card-deck--card-title">{fav.name}</Card.Title>
                                            <Card.Text className="favorites--card-deck--card-text">{fav.temperature}°{isCelsius ? 'C' : 'F'}</Card.Text>
                                            <Card.Text className="favorites--card-deck--card-text">{fav.weatherCondition}</Card.Text>
                                        </Card.Body>
                                    </Link>
                                </YellowCard>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </CardDeck >

    )
}
export default Favorites;