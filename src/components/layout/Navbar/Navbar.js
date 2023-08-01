import React from "react";

import { Link } from 'react-router-dom';
import Container from '../Container/Container';

import styles from './Navbar.module.css';
import logo from '../../../img/costs_logo.png';

function Navbar(){
    return(
        <nav>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs"></img>
                </Link>
                <Link to="/">Home</Link>
                <Link to="/contact">Contato</Link>
                <Link to="/company">Empresa</Link>
                <Link to="newProject">Novo Projeto</Link>
            </Container>
        </nav>
    )
}

export default Navbar;