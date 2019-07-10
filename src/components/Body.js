// Will hold the two forms, one to call info and one to display it.
import React from 'react'
import NavButton from './links/NavButton'
import starwarsData from '../data/starwarsData'
import SelectorForm from './forms/SelectorForm'

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiSection: '',
            apiCurrent: '',
            apiInfo: {},
            // apiLinks: {},
            // TODO Add links to the api links within the apiInfo to jump around easier
            // TODO Add some sort of 'Breadcrumbs' or 'Back' feature
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(item) {
        this.setState({
            apiCurrent: item.apiLink,
            apiSection: item.title,
        });
        // TODO Incorporate a loading image of some sort.
        // TODO check with apiStorage to see if that url is already saved into object: If so, return that object as apiInfo state
        fetch(item.apiLink)
            .then(response => response.json())
            .then(data => this.setState({apiInfo: data}))
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
                <SelectorForm apiInfo={this.state.apiInfo} apiCurrent={this.state.apiCurrent}/>
            </div>
        )
    }
}


export default Body