import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ life, mana }) => {
    return (
        <header class='header'>
            <h1 style = {headingStyle}>LIFE: {life} <br></br>MANA: {mana}</h1>
            <Button name = 'TEST ' atk = '1' def = '1' mana = '3'/>
            <Button name = 'TEST ' atk = '1' def = '1'/>
            <Button name = 'TEST ' atk = '1' def = '1'/>
            <Button name = 'TEST ' atk = '1' def = '1'/>
        </header>
        
    )
}

Header.defaultProps = {
    life: '20',
    mana: '1'
}

//just for reference
Header.propTypes = {
    life: PropTypes.number.isRequired,
    mana: PropTypes.number.isRequired
}

//HEADER!!! STYLE
const headingStyle = {
    color: 'black',
    backgroundColor: 'white'
}

export default Header