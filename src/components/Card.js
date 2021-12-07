import React from 'react'
import PropTypes from 'prop-types'

const Card = ({name, atk, def, mana}) => {
    const onClick = (e) => {
        console.log(e)
    }
    return (
  
    <card 
        onClick={onClick} 
        className='card'>
        {name}
        <br></br>atk: {atk}
        <br></br>def: {def}
        <br></br>cost: {mana}
    </card>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    atk: PropTypes.number.isRequired,
    def: PropTypes.number.isRequired,
    mana:PropTypes.number.isRequired,
}

Card.defaultProps = {
    name: '',
    atk: '',
    def: '',
    mana: ''
}

export default Card