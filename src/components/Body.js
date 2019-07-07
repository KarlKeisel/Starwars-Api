// Will hold the two forms, one to call info and one to display it.
import React from 'react'
import NavButton from './links/NavButton'
import starwarsData from '../data/starwarsData'

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiSection: '',
            apiCurrent: '',
            apiInfo: {},
            apiLinks: {},
        }
    }

    handleClick = (link) => e => {
        console.log(e);
        console.log(link)
    };


    render() {
        const NavButtons = starwarsData.map(item =>  <NavButton key={item} item={item} handleClick={this.handleClick} />);
        const What = starwarsData.map(item => console.log(item));
        // TODO Figure out what is being passed, seems like correct # of objects.


        return (
            <div className='body container-fluid'>
                <div className='row'>
                    {NavButtons}
                </div>
            </div>
        )
    }
}


export default Body