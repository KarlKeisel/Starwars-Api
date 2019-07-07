import React from 'react'

function NavButton(props) {
    return (
        <button onClick={() => alert(props.item.apiLink)} className='btn btn-dark col-lg-2 col-sm-4'>
            <h3 className='nav-item'>{props.item.title}</h3>
        </button>
    )
}

export default NavButton

// {/*<button onClick={() => props.handleClick(props.item.link)} className='btn btn-dark col-lg-2 col-sm-4'>*/};
