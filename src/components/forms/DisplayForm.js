// Will display the info that is pulled from API
// TODO Build DisplayForm
// TODO Style DisplayForm

import React from 'react'
import DisplayField from './DisplayField'

function DisplayForm(props) {

    // Will display the selected item info.
    // Will need to 'rate' each item in importance to better style the items. (DisplayField?)
    // If item is an object, will need to iterate through them and put in a list.
    // If item is an url, must put an 'onClick' to allow travel between links.
    const keys = Object.keys(props.item);
    const keysList = keys.map(data =>
        <DisplayField
        key={data}
        title={data}
        info={props.item[data]}
        handleItemSelection={props.handleItemSelection}
        />);

    return (
        <div>
            <h3>{props.item.name}</h3>  {/* Object either has name or title. */}
            <h3>{props.item.title}</h3>
            <br />
            <div className='row pr-3'>
            {keysList}
            </div>
        </div>
    )
}

export default DisplayForm