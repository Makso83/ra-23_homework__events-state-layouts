import React from 'react'

const IconSwitch = (props) => {
    return (
        <div className="IconSwitch_icon" onClick={props.onSwitch}><span className="material-icons">
        {props.icon}
        </span></div>
    )
}

export default IconSwitch;