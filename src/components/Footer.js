import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <a className="foot-link col-lg-4" href="https://github.com/KarlKeisel/">
                        <h5>Karl's Github link</h5>
                    </a>
                    <h5 className="col-lg-8 foot-link">Many thanks to
                        <a href="https://swapi.co/api/"> https://swapi.co/api/ </a>
                        for the awesome API!
                    </h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer