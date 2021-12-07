import PropTypes from 'prop-types'

const Button = ({name, atk, def, mana}) => {
    const onClick = (e) => {
        console.log(e)
    }
    return (
  
    <button 
        onClick={onClick} 
        className='btn'>
        {name}
        <br></br>atk: {atk}
        <br></br>def: {def}
        <br></br>cost: {mana}
    </button>
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    atk: PropTypes.number.isRequired,
    def: PropTypes.number.isRequired,
    mana:PropTypes.number.isRequired,
}

Button.defaultProps = {
    name: 'null card',
    atk: '0',
    def: '0',
    mana: '1'
}

export default Button