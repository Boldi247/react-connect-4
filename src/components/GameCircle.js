import React from 'react'
import '../Game.css'

const onClick = (event, id, color) => {
    alert("on click" + id);
}

const GameCircle = ({ id, color, children }) => {

    const style = {
        backgroundColor: color,
    }

    console.log(id);
    return (
        <div className="gameCircle" style={id % 2 === 0 ? { backgroundColor: 'red' } : { backgroundColor: 'blue' }} onClick={(event) => onClick(event, id, color)}>
            {children}
        </div>
    )
}

export default GameCircle