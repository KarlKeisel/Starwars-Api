import React from 'react'

function NavButton(props) {

        let button = props.item.title === props.section ?
            'btn-light' :
            'btn-dark';

    return (
        <button onClick={() => props.handleClick(props.item)} className={'btn ' + button + ' col-lg-2 col-sm-4'}>
            <h3 className='nav-item'>{props.item.title}</h3>
        </button>
    )
}

export default NavButton
