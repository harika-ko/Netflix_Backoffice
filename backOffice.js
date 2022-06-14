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


const eventId = new URLSearchParams(window.location.search).get("userId");
console.log(eventId);

const options2 = {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2U2MjdmZmQ0OTAwMTU4YTdhOWIiLCJpYXQiOjE2NTQ4NjU1MDYsImV4cCI6MTY1NjA3NTEwNn0.CytmxArs6DM9IY723KxsefpHzvAEU8nDeGtMlemWuNM",
    },
};

const deleteEvent = async (event) => {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/movies/" + eventId, options2);

        const parsedBody = await response.json();

        if (window.confirm("Are you sure you would like to delete this movie?")) {
            alert("You have successfully deleted the movie, with the ID: " + eventId);
        } else
            alert("Nothing is deleted!");
    } catch (error) {
        console.log(error)
    }
};



