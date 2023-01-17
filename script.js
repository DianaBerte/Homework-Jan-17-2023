const loadImagesBtn = () => {
   fetch('https://api.pexels.com/v1/search?query=563492ad6f917000010000017b1b51018c0c46df9be0b99163b943be', {
   method: "GET",     
   headers: {
            Authorization: "Bearer 563492ad6f917000010000017b1b51018c0c46df9be0b99163b943be"
        }
   
    }).then((response)=> {
        return response.json()
    }).then((data)=> {
        console.log(data)
    })
    .catch(err => console.error(err))
}