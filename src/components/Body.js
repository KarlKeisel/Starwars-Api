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
        fetch(item.apiLink)
            .then(response => response.json())
            .then(data => this.setState({apiInfo: data}))
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

    handlePageSelection(item) {
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
            <h2 className="intro">Welcome to my Star Wars API Lookup! Press any of the menu buttons to begin!</h2> : '';

        return (
            <div className='body container-fluid pl-0'>
                <div className='row'>
                    {NavButtons}
                </div>
                <div>{ApiLink}</div>
                <div className='row'>
                    <div className='col-lg-4'>
                        {Object.entries(this.state.apiInfo).length === 0 && this.state.apiInfo.constructor === Object ?
                            <h3 className="pl-2"> </h3> :  // Test if info is empty. Left for code review.
                            <SelectorForm
                                apiInfo={this.state.apiInfo}
                                apiCurrent={this.state.apiCurrent}
                                handleItemSelection={this.handleItemSelection}
                                handlePageSelection={this.handlePageSelection}  // To Paginator
                            />}
                    </div>
                    <div className='col-lg-8'>
                        {Object.entries(this.state.selectedItem).length === 0 && this.state.selectedItem.constructor === Object ?
                            <h3 className={"float-right"}> </h3> : // Test if item is empty. Left for code review.
                            <DisplayForm
                                item={this.state.selectedItem}
                                handleItemSelection={this.handleItemSelection}
                            />}
                    </div>
                </div>

            </div>
        )
    }
}


export default Body