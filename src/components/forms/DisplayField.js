// TODO Make DisplayField to populate one piece of info (which may also be an array)

// Takes in three pieces of info: Key, Data, Importance.
// Will display Key: Data and then add classNames to the object to help sort it better.
// If Data is an Array, then must return an ordered list. (Possibly with scroll bar?)

import {keyMatcher} from "../../data/displayFieldClassNames";
import React from 'react'

function DisplayField(props) {

    function isInfoURL(item) {  // Checks to see if the item is a url link to provide onClick.
        const isUrl = item.slice(0, 5);
        return (isUrl === 'https')
    }

    function infoSorter() {
        return Array.isArray(props.info) ?
            props.info.length === 0 ?
                <ul>
                    <li>None</li>
                </ul>
                :
                <ul>
                    {props.info.map((item) => {
                        return <li key={item}
                                   onClick={isInfoURL ? () => props.handleItemSelection(item, true) : undefined}
                                   className={isInfoURL ? 'url' : undefined}
                        >
                            {item}
                        </li>
                    })}
                </ul>
            :
            <span onClick={isInfoURL ? () => props.handleItemSelection(props.info, true) : undefined}>
                {props.info}
            </span>;
    }

    // Is item an array AND length > 0? Populate as a <ul>
    // Is item an array with length = 0? Populate with 'None'
    // Is the text an url? Add onClick to each url.
    // onClick = {true ? () => props.handleItemSelection(item, true) : undefined}


    function classNameMaker(key) {
        return keyMatcher[key];
    }

    return (
        <div className={classNameMaker(props.title)}>
            <p>
                {props.title.charAt(0).toUpperCase() + props.title.substring(1).toLowerCase()} :
                <br/>

            </p>
            {infoSorter()}
        </div>
    )

}

export default DisplayField