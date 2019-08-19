// Will hold the two forms, one to call info and one to display it.
import React from 'react'
import NavButton from './links/NavButton'
import starwarsData from '../data/starwarsData'
import SelectorForm from './forms/SelectorForm'
import DisplayForm from './forms/DisplayForm'

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiSection: '',
            apiCurrent: '',
            apiInfo: {},
            selectedItem: {},
            // TODO Add some sort of 'Breadcrumbs' or 'Back' feature
        };
        this.handleClick = this.handleClick.bind(this);  // For NavButtons
        this.handleItemSelection = this.handleItemSelection.bind(this);  // For SelectorForm and DisplayForm
        this.handlePageSelection = this.handlePageSelection.bind(this);  // For Paginator
    }

    handleClick(item) {
        this.setState({
            apiCurrent: item.apiLink,
            apiSection: item.title,
            apiInfo: {},
        });
        // TODO Incorporate a loading image of some sort.
        // TODO check with apiStorage to see if that url is already saved into object: If so, return that object as apiInfo state
        fetch(item.apiLink)
            .then(response => response.json())
            .then(data => this.setState({apiInfo: data}))
        // TODO Separate this into apiCaller file to make easier to use!
    };

    handleItemSelection(item, url) {
        this.setState({selectedItem: {}});
        // If url: then make api call, setState to results. If not, then setState to item.
        if (url === true) {
            fetch(item)  // Item is a url
                .then(response => response.json())
                .then(data => this.setState({selectedItem: data}))
        } else {  // Item is already an object
            this.setState({selectedItem: item})
        }

    };

    handlePageSelection(item) {  // TODO look at refactoring with handleClick?
        if (item !== null) {
            this.setState({apiSection: item});
            fetch(item)
                .then(response => response.json())
                .then(data => this.setState({apiInfo: data}))
        }
    }


    render() {
        const NavButtons = starwarsData.map(item => <NavButton key={item.title} item={item}
                                                               section={this.state.apiSection}
                                                               handleClick={this.handleClick}/>);
        const ApiLink = this.state.apiSection === '' ?
            <h2 className="intro">Welcome to my Starwars API Lookup! Press any of the menu buttons to begin!</h2> : '';

        return (
            <div className='body container-fluid pl-0'>
                <div className='row'>
                    {NavButtons}
                </div>
                <div>{ApiLink}</div>
                {Object.entries(this.state.apiInfo).length === 0 && this.state.apiInfo.constructor === Object ?
                    <h3 className="pl-2">apiInfo is empty</h3> :  // Test if info is empty.
                    // TODO Remove empty string ^
                    <SelectorForm
                        apiInfo={this.state.apiInfo}
                        apiCurrent={this.state.apiCurrent}
                        handleItemSelection={this.handleItemSelection}
                        handlePageSelection={this.handlePageSelection}  // To Paginator
                    />}
                {Object.entries(this.state.selectedItem).length === 0 && this.state.selectedItem.constructor === Object ?
                    <h3 className={"float-right"}>selectedItem is empty</h3> : // Test if item is empty.
                    // TODO Remove empty string     ^
                    <DisplayForm
                        item={this.state.selectedItem}
                        handleItemSelection={this.handleItemSelection}
                    />}

            </div>
        )
    }
}


export default Body