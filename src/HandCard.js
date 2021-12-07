import React from 'react'
import PropTypes from 'prop-types'


const HandCard = ({ name, atk, def  }) => {
    return (
        <handcard style = {cardStyle}class='handcard'>
            <p>{name}</p>
            <p>Atk: {atk}</p>
            <p>Def: {def}</p>

            
        </handcard>
        
    )
}

HandCard.defaultProps = {
    name: 'basicMonster',
    atk: '1',
    def: '1'
}

//just for reference
HandCard.propTypes = {
    title: PropTypes.string.isRequired,
    atk: PropTypes.number.isRequired,
    def: PropTypes.number.isRequired,
}

const cardStyle = {
    color: 'red',
}


export default HandCard