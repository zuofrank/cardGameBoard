import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
const Hand = ({ life, mana }) => {
    return (
        <hand class='hand'>
            <Card name = 'TEST ' atk = '1' def = '1' mana = '3'/>
            <Card name = 'TEST ' atk = '1' def = '1'/>
            <Card name = 'TEST ' atk = '1' def = '1'/>
            <Card name = 'TEST ' atk = '1' def = '1'/>
        </hand>
        
    )
}

Hand.defaultProps = {
    life: '20',
    mana: '1'
}

//just for reference
Hand.propTypes = {
    life: PropTypes.number.isRequired,
    mana: PropTypes.number.isRequired
}

//Hand!!! STYLE
const headingStyle = {
    color: 'black',
    backgroundColor: 'white'
}

export default Hand