import React from 'react';
import { Card, } from 'react-bootstrap';
const YellowCard = ({ children, style, className }) => (
    <Card border='warning' style={style || {}} className={className || {}}>
        {
            children
        }
    </Card>
)



export default YellowCard;