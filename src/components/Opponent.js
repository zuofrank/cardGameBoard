import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
const Opponent = ({ life, mana }) => {
    return (
        <opponent class='opponent'>
            <Card name = 'TEST ' atk = '1' def = '1' mana = '3'/>
        </opponent>
        
    )
}

Opponent.defaultProps = {
    life: '20',
    mana: '1'
}

//just for reference
Opponent.propTypes = {
    life: PropTypes.number.isRequired,
    mana: PropTypes.number.isRequired
}

//Opponent!!! STYLE
const headingStyle = {
    color: 'black',
    backgroundColor: 'white'
}

export default Opponent