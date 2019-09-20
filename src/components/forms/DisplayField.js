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
                <ul className='col-6'>
                    <li>None</li>
                </ul>
                :
                <ul className='col-10'>
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
            <span onClick={isInfoURL ? () => props.handleItemSelection(props.info, true) : undefined}
                  className={isInfoURL ? 'url' : undefined}
            >
                {props.info}
            </span>;
    }

    function classNameMaker(key) {  // Auto classNames based on 'key'
        return keyMatcher[key];
    }

    return (
        <div className={classNameMaker(props.title)}>
            <div className='row'>
                <p className='col'>
                    {props.title.charAt(0).toUpperCase() + props.title.substring(1).toLowerCase()} :
                </p>
                {infoSorter()}
            </div>
        </div>
    )

}

export default DisplayField