// Will be used to select which piece of the API that will be displayed
// Takes count and "name" object from "results" object (or "title" if it is the "films" section)
// Will return a Paginator object (Even if one page) and will return a selectable list of the names.
// TODO Build SelectorForm, import Paginator

import React from 'react'

class SelectorForm extends React.Component {

    // Will need info to display "results" part of object.
    // Will send page number and count to Paginator.
    // Will need to .keys() to see if "results" contains the 'title' key. (films only)
    // Iterate through each object and pull names/titles
    // Bootstrap ListGroup ***
    // This object needs to display names/titles as a list. With Paginator next to it.
    // Object must be able to change the 'apiCurrent' state to whichever person is selected.
    // Object must then disappear to make room for DisplayForm.
    // Paginator object must also be able to modify state.
    // Object does not need to change button colors, as it only selects from within the section.

    // EXTRA: Make object slide in when first created, and slide out when unmounted. (CSS?)


    render() {
        return (
            <div>
                <h3>apiInfo is NOT empty</h3>
            </div>
        )
    }
}

export default SelectorForm