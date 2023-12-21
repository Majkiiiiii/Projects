import React from "react";
import PropTypes from "prop-types";
import './styleTabela.css';


const Wypisanie = props => (
    <tr><td>{props.pesel}</td><td>{props.imie}</td><td>{props.nazwisko}</td><td>{props.adres}</td><td>{props.nrtel}</td><td>{props.email}</td><td>{props.plec}</td></tr>
);


Wypisanie.propTypes={
    pesel: PropTypes.number,
    imie: PropTypes.string,
    nazwisko: PropTypes.string,
    adres: PropTypes.string,
    nrtel: PropTypes.string,
    email: PropTypes.string,
    plec: PropTypes.string,
};

export default Wypisanie;