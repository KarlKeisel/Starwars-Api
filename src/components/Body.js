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
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(item) {
        this.setState({
            apiCurrent: item.apiLink,
            apiSection: item.title
        });
        // setState apiCurrent to apiLink on button.
        // setState apiSection to title on button. (Used for highlighting the button: className)
        // check with apiStorage to see if that url is already saved into object: If so, return that object as apiInfo state
        // use apiCaller to make call to swapi to grab the list for that section and return as state for apiInfo
    };


    render() {
        const NavButtons = starwarsData.map(item => <NavButton key={item.title} item={item}
                                                               section={this.state.apiSection}
                                                               handleClick={this.handleClick}/>);
        const ApiLink = this.state.apiSection === '' ?
            <h2 className="intro">Welcome to my Starwars API Lookup! Press any of the menu buttons to begin!</h2> : '';

        return (
            <div className='body container-fluid'>
                <div className='row'>
                    {NavButtons}
                </div>
                <div>{ApiLink}</div>
            </div>
        )
    }
}


export default Body