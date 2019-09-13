// TODO Make DisplayField to populate one piece of info (which may also be an array)

// Takes in three pieces of info: Key, Data, Importance.
// Will display Key: Data and then add classNames to the object to help sort it better.
// If Data is an Array, then must return an ordered list. (Possibly with scroll bar?)

import {keyMatcher} from "../../data/displayFieldClassNames";
import React from 'react'

function DisplayField(props) {

    function isInfoURL() {  // Checks to see if the item is a url link to provide onClick.
        const isUrl = props.info.slice(0,5);
        return (isUrl === 'https') ?
            'text-warning' :
            ''
    }  // TODO Change to onClick effect

    function infoSorter() {
        return Array.isArray(props.info) ?
            props.info.forEach(function (info, index) {
                return 'array';  // TODO Fix me! Does not return array items.
            }) :
            <span className={isInfoURL()}>{props.info}</span>;
    }

    // Check for list first, will need to organize data.
    // Check for url next, will need to assign 'onClick' to each of them.
    // handleItemSelection(info, true);

    function classNameMaker(key) {
        return keyMatcher[key];
    }

    return (
            <p className={classNameMaker(props.title)}>
                {props.title.charAt(0).toUpperCase() + props.title.substring(1).toLowerCase()} :
                <br />
                {infoSorter()}
            </p>
    )

}

export default DisplayField