import React, { useState } from 'react';
import {
    Link
} from "react-router-dom";

import { Nav, Navbar, ButtonGroup, ToggleButton } from 'react-bootstrap';
import logo from '../logo.png';
import { useDispatch } from 'react-redux';
import { changeTempType } from '../store/actions';

const radios = [
    { name: 'Celsius', value: 'C' },
    { name: 'Fahrenheit', value: 'F' },
];
const Header = () => {
    const [radioValue, setRadioValue] = useState('C');
    const dispatch = useDispatch();


    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Navbar.Brand href="/" className="header--navbar-brand">
                    <img src={logo} alt="logo" className="header--logo" />
                    My Weather App
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/Favorites" className="nav-link">Favorites</Link>
                    </Nav>
                    <ButtonGroup toggle>
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            type="radio"
                            variant="secondary"
                            name="radio"
                            value={radio.value}
                            disabled={radioValue === radio.value}
                            onChange={(e) => { 
                                setRadioValue(e.currentTarget.value);
                                dispatch(changeTempType())
                             }
                            }
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
                </Navbar.Collapse>
            </Navbar>

        </>
    )
}
export default Header;

