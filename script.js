const options = {
    method: "GET",
    headers: {
        Authorization: "Bearer 563492ad6f917000010000017b1b51018c0c46df9be0b99163b943be"
    }
}

const getImages = (query) => {
    fetch(`https://api.pexels.com/v1/search?query= ${query}`, options)

.then((response) => response.json())
.then((data) => {console.log(data)})
}

getImages("dogs")