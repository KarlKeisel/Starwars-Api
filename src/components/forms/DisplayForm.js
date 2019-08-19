// Will display the info that is pulled from API
// TODO Build DisplayForm
// TODO Style DisplayForm

import React from 'react'

function DisplayForm(props) {

    // Will display the selected item info.
    // Will need to 'rate' each item in importance to better style the items. (DisplayField?)
    // If item is an object, will need to iterate through them and put in a list.
    // If item is an url, must put an 'onClick' to allow travel between links.

    // Style: Must be side by side with SelectorForm (Handled in Body.js ?)

    return (
        <h3>{props.item.name}</h3>
    )
}
export default DisplayForm