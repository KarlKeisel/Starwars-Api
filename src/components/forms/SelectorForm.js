// Will be used to select which piece of the API that will be displayed
// Takes count and "name" object from "results" object (or "title" if it is the "films" section)
// Will return a Paginator object (Even if one page) and will return a selectable list of the names.
// TODO Build SelectorForm

import React from 'react'
import { ListGroup, ListGroupItem } from "react-bootstrap"
import Paginator from './Paginator'

class SelectorForm extends React.Component {

    // EXTRA: Make object slide in when first created, and slide out when unmounted. (CSS?)
    // TODO Style SelectorForm better! (Slide in and out, mouse over graphics, selector graphics)


    render() {
        const nameOrTitle = this.props.apiInfo.results[0].hasOwnProperty("name");  // Films labelled by title, not name.

        const nameList = this.props.apiInfo.results.map(item =>
            <ListGroupItem
                action onClick={() => this.props.handleItemSelection(item, false)}
                className="drk-selector"
                key={item.url}
            >{nameOrTitle ? item.name : item.title}
            </ListGroupItem>);

        return (
            <div className={`container-fluid left-side`}>
                <div className="row">
                <ListGroup className="col-12">
                {nameList}
                </ListGroup>
                <Paginator
                    className={`col-12`}  // TODO Fix so paginator is stretched or right aligned!
                    apiInfo={this.props.apiInfo}  // Has count and page numbers
                    handlePageSelection={this.props.handlePageSelection}
                />
                </div>
            </div>
        )
    }
}

export default SelectorForm