// Will accept a url and return a json object.
// Show a loading image while it is working. (Separate file?)

function apiCaller(url) {
    fetch(url)
        .then(response => response.json())
}

// TODO Return promise! Or some sort of data.

export default apiCaller()