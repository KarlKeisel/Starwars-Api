// Will accept a url and return a json object.
// Show a loading image while it is working. (Separate file?)
// TODO Is this needed?

function apiCaller(url) {
    fetch(url).then(function(response) {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export default apiCaller