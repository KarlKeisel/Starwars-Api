// Will display the info that is pulled from API
// TODO Build DisplayForm
// TODO Style DisplayForm

import React from 'react'

function DisplayForm(props) {

    // Will display the selected item info.
    // Will need to 'rate' each item in importance to better style the items. (DisplayField?)
    // If item is an object, will need to iterate through them and put in a list.
    // If item is an url, must put an 'onClick' to allow travel between links.
    const keys = Object.keys(props.item);
    const keysList = keys.map(data => <p key={data}>{data.toUpperCase()}: {props.item[data]}</p>);

    return (
        <div>
            <h3>{props.item.name}</h3>
            {keysList}
        </div>
    )
}

export default DisplayForm