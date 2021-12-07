import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
const FieldSelf = ({ life, mana }) => {
    return (
        <fieldSelf class='fieldSelf'>
            <Card name = 'TEST ' atk = '1' def = '1' mana = '3'/>
            <Card name = 'TEST ' atk = '1' def = '1'/>
            <Card name = 'TEST ' atk = '1' def = '1'/>
            <Card name = 'TEST ' atk = '1' def = '1'/>
        </fieldSelf>
        
    )
}

FieldSelf.defaultProps = {
    life: '20',
    mana: '1'
}

//just for reference
FieldSelf.propTypes = {
    life: PropTypes.number.isRequired,
    mana: PropTypes.number.isRequired
}

//FieldSelf!!! STYLE
const headingStyle = {
    color: 'black',
    backgroundColor: 'white'
}

export default FieldSelf