const sendMovies = async (event) => {
    try {
        event.preventDefault();

        const userInput = {
            name: document.getElementById("name").value,
            description: document.getElementById("description").value,
            category: document.getElementById("category").value,
            imageUrl: document.getElementById("image").value,
        }

        console.log(userInput)
        const options = {
            method: "POST",
            body: JSON.stringify(userInput),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2U2MjdmZmQ0OTAwMTU4YTdhOWIiLCJpYXQiOjE2NTQ4NjU1MDYsImV4cCI6MTY1NjA3NTEwNn0.CytmxArs6DM9IY723KxsefpHzvAEU8nDeGtMlemWuNM",
            },
        };
        const response = await fetch("https://striveschool-api.herokuapp.com/api/movies/", options)

    } catch (err) {
        console.log(err)
    }
}