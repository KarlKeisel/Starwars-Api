// TODO Make DisplayField to populate one piece of info (which may also be an array)

// Takes in three pieces of info: Key, Data, Importance.
// Will display Key: Data and then add classNames to the object to help sort it better.
// If Data is an Array, then must return an ordered list. (Possibly with scroll bar?)

import {smallLong, small, medium, mediumLong, large, largeThin, keyMatcher} from "../../data/displayFieldClassNames";
import React from 'react'

function DisplayField(props) {

    // Functions here
    // Is data an array? Return list with data inside.
    // Is data a link?
    // Is data empty? Return none

    return (
        <p>{props.data}</p>
    )

}