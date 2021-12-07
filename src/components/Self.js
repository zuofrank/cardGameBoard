import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
const Self = ({ life, mana }) => {
    return (
        <self class='self'>
            <Card name = 'TEST ' atk = '1' def = '1' mana = '3'/>
        </self>
        
    )
}

Self.defaultProps = {
    life: '20',
    mana: '1'
}

//just for reference
Self.propTypes = {
    life: PropTypes.number.isRequired,
    mana: PropTypes.number.isRequired
}

//Self!!! STYLE
const headingStyle = {
    color: 'black',
    backgroundColor: 'white'
}

export default Self