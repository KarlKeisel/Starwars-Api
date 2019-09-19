import React from 'react'
import logo from '../logo.svg';


function Header() {
    return (
        <header className='App-header'>
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className='brand'>
                Karl's Star Wars API Reader
            </h1>
        </header>
    )
}

export default Header