// Will take a count state and current page.
// Will return PAGINATOR BUTTONS and those in turn will return PAGE NUMBER when clicked.
// StarwarsAPI defaults to 10 per page
// Add a 'jump-to' page that also returns page number.
// TODO Finish Paginator

import React from 'react'

function Paginator(props) {
    // Needs three pieces of info: "count", "next", "previous"
    // Will divide count by 10 to get # of pages
    // Will display "first", "previous", "couple-pages", "current", "couple-pages", "next", "last"
    // Maybe look at just "previous", "next"...
    return (
        <div className='paginator'>
        </div>
    )

}

export default Paginator