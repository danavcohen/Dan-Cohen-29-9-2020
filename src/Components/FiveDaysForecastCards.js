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
                        <Card.Text style={styles.cardText}>
                            {dayForceCast.minTemp}°{isCelsius ? 'C' : 'F'} - {dayForceCast.maxTemp}°{isCelsius ? 'C' : 'F'}
                        </Card.Text>
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