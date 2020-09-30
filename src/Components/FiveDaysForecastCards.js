import React from 'react';
import YellowCard from './YellowCard';
import { Card, CardDeck } from 'react-bootstrap';
import { daysNames, stringDateToDate } from '../helper';
const FiveDaysForecastCards = ({ fiveDaysForecast, isCelsius }) => (
    <CardDeck style={styles.cardDeck}>
        {
            fiveDaysForecast && fiveDaysForecast.map((dayForceCast, index) => {
                return (
                    <YellowCard key={index} style={styles.yellowCard} className="col-md-3 col-sm-8 col-lg-2">
                        <Card.Body>
                            <Card.Title as="h6" style={styles.cardTitle}>
                                {daysNames[stringDateToDate(dayForceCast.date).getDay()]}
                            </Card.Title>
                            {isCelsius ?
                                (<Card.Text style={styles.cardText}>
                                    {dayForceCast.temperatures.celsius.minTemp}°{'C'} - {dayForceCast.temperatures.celsius.maxTemp}°{'C'}
                                </Card.Text>) 
                                :
                                (<Card.Text style={styles.cardText}>
                                    {dayForceCast.temperatures.fahrenheit.minTemp}°{'F'} - {dayForceCast.temperatures.fahrenheit.maxTemp}°{'F'}
                                </Card.Text>)
                            }
                    </Card.Body>
                    </YellowCard>
                )
            })
        }

    </CardDeck >

)
const styles = {
    yellowCard: {
        minWidth: '150px', marginTop: '15px'
    },
    cardTitle:
    {
        textAlign: 'center',
    },
    cardText: {
        textAlign: 'center',
    },
    cardDeck:
    {
        marginTop: '30px',
    }
}
export default FiveDaysForecastCards;