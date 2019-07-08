// Used to give credit to "https://swapi.co/api/"
// TODO provide Github link and credit for swapi.co

import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <h5 className="col-8">Many thanks to
                        <a className="foot-link" href="https://swapi.co/api/"> https://swapi.co/api/ </a>
                        for the awesome API!
                    </h5>
                    <a className="foot-link col-4" href="https://github.com/KarlKeisel/">
                        <h5>Karl's Github link</h5>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer