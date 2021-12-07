import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
const FieldOpponent = ({ life, mana }) => {
    return (
        <fieldOpponent class='fieldOpponent'>
            <Card name = 'TEST ' atk = '1' def = '1' mana = '3'/>
            <Card name = 'TEST ' atk = '1' def = '1'/>
            <Card name = 'TEST ' atk = '1' def = '1'/>
            <Card name = 'TEST ' atk = '1' def = '1'/>
        </fieldOpponent>
        
    )
}

FieldOpponent.defaultProps = {
    life: '20',
    mana: '1'
}

//just for reference
FieldOpponent.propTypes = {
    life: PropTypes.number.isRequired,
    mana: PropTypes.number.isRequired
}

//FieldOpponent!!! STYLE
const headingStyle = {
    color: 'black',
    backgroundColor: 'white'
}

export default FieldOpponent