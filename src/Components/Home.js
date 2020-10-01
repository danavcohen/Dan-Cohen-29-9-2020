import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormControl, Button, Form, Card, Container, Col, Row } from 'react-bootstrap';
import { addToFavorites, removeFromFavorites, setErrorModal } from '../store/actions';
import { City, Favorite } from '../modal/classes';
import { getCitiesArrayFromApi, setCurrentConditionDataInCity, setFiveDaysForecastDataInCity } from '../utils/api';
import FiveDaysForecastCards from './FiveDaysForecastCards';

const Home = () => {

    const isCelsius = useSelector((state) => state.isCelsius);
    const currentCity = useSelector((state) => state.currentCity);
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();
    const [search, setSearch] = useState(currentCity);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        searchButtonHandler();
    }, []);

    const searchTypingHandler = (event) => { setSearch(event.target.value) };

    const searchButtonHandler = async () => {
        const tempCities = [];
        if (!search) { return; }//if the search field is empty.
        try {
            const resFromAutoComplete = await getCitiesArrayFromApi(search);
            for (const autoCompleteElement of resFromAutoComplete) {
                const city = new City();
                city.key = autoCompleteElement.Key;
                city.name = autoCompleteElement.LocalizedName;
                await setCurrentConditionDataInCity(autoCompleteElement.Key, city, isCelsius)//set temperature and weather condition in city.
                await setFiveDaysForecastDataInCity(autoCompleteElement.Key, city, isCelsius)//set five days forecast data (min temp ,max temp and date) in city obj.
                tempCities.push(city);
            }//for   
        } catch (err) {
            dispatch(setErrorModal(err));

        }
        setCities([...tempCities])

    }//function

    return (
        <div className="home-container">
            <Form inline className="home--forme">
                <FormControl type="text"
                    placeholder="Search a city"
                    className="mr-sm-2 home--form-control" value={search}
                    onChange={searchTypingHandler} />
                <Button variant="outline-dark" onClick={searchButtonHandler} className="home--form--search-button" >Search</Button>
            </Form>

            {cities && cities.map((city) => (
                <Container key={city.key} className="col-md-8 col-sm-12 home--container--card-container">
                    <Card >
                        <Card.Header as="h4" className="home--card-header" >
                            <Row className="home--card-row">
                                <Col xs={12} sm={6} lg={7} xl={8}>{city.name}</Col>
                                <Col xs={12} sm={5} lg={4} xl={3}
                                    className="home--card--button-col">
                                    {

                                        favorites.find(favor => favor.key === city.key) ?
                                            <Button variant="danger"
                                                className="col-md  col-xs home--card-button"
                                                onClick={() => dispatch(
                                                    removeFromFavorites(city.key))}>
                                                Remove From Favorite
                                                        </Button>
                                            :
                                            <Button variant="success"
                                                className="col-md  col-xs home--card-button" 
                                                onClick={() => dispatch(addToFavorites(
                                                    new Favorite(city.key, city.name,
                                                        city.weatherCondition, city.temperature)))}>
                                                Add To Favorite
                                                            </Button>
                                    }
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Now {isCelsius ?
                                city.temperature.celsius
                                :
                                city.temperature.fahrenheit}°{isCelsius ? 'C' : 'F'}</Card.Title>
                            <Card.Text as="h3">{city.weatherCondition}</Card.Text>
                            <FiveDaysForecastCards fiveDaysForecast={city.fiveDaysForecast} isCelsius={isCelsius} />
                        </Card.Body>
                    </Card>
                </Container>
            ))}
        </div>
    )
}
export default Home;

