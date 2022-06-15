const URLAPI = "https://striveschool-api.herokuapp.com/api/movies/";
const eventId = new URLSearchParams(window.location.search).get("userId");   //getting the event ID from URL
console.log(eventId);

const method = eventId ? "PUT" : "POST";  // If eventId is present then PUT method will be actioned otherwise POST

const endPoint = eventId ? URLAPI + eventId : URLAPI;  // If eventId is present URL will be with the eventId otherwise not

const options = {
    method: method,  //PUT method
    headers: {
        "Content-Type": "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2U2MjdmZmQ0OTAwMTU4YTdhOWIiLCJpYXQiOjE2NTQ4NjU1MDYsImV4cCI6MTY1NjA3NTEwNn0.CytmxArs6DM9IY723KxsefpHzvAEU8nDeGtMlemWuNM",
    },
};

window.onload = async () => {
    try {
        if (eventId) {
            const response = await fetch(endPoint, options); //Response Object is returned 

            const { name, imageUrl, category, description } = await response.json(); //Destructuring the response obtained from response.json()
            //response.json() parses the response text as JSON

            //Obtaining each parameter value and assigning them to their variables
            document.getElementById("name").value = name;
            document.getElementById("description").value = description;
            document.getElementById("category").value = category;
            document.getElementById("image").value = imageUrl;

            // Getting Submit button and changing it to Edit
            const submitButton = document.querySelector(".submitButton");
            submitButton.innerText = "Edit";

        }
    } catch (error) {
        console.log("Something went wrong" + error)
    }
};

// Function to post new Movies using POST method

let sendMovies = async (event) => {
    event.preventDefault(); //Preventing the Default action of Forms(after filling values and clicking on submit, it just shows up on console only when clicked on submit)

    const userInput = { // Created an Object to obtain the typed values in fields
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        category: document.getElementById("category").value,
        imageUrl: document.getElementById("image").value,
    };

    console.log(userInput)

    const response = await fetch(endPoint, {
        method: method, //POST method
        body: JSON.stringify(userInput), //Converting userInput Object into String
        headers: {
            "Content-Type": "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2U2MjdmZmQ0OTAwMTU4YTdhOWIiLCJpYXQiOjE2NTQ4NjU1MDYsImV4cCI6MTY1NjA3NTEwNn0.CytmxArs6DM9IY723KxsefpHzvAEU8nDeGtMlemWuNM",
        },
    });

    if (!response.ok) throw new Error("Generic error, something wrong with the fetch")

    if (eventId) {
        const body = await response.json();  //stored response in body
        alert("You edited the movie with Id: " + body._id); // alert will pop up when edited with movie Id
        window.location.assign("./index.html"); // Backoffice page will be redirected to main page
    } else {
        const body = await response.json();
        alert("You added a new movie with Id: " + body._id);
        window.location.assign("./index.html");
    }
};




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


