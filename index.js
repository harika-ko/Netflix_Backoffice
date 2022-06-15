const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2U2MjdmZmQ0OTAwMTU4YTdhOWIiLCJpYXQiOjE2NTQ4NjU1MDYsImV4cCI6MTY1NjA3NTEwNn0.CytmxArs6DM9IY723KxsefpHzvAEU8nDeGtMlemWuNM",
  },
};

let thrillerRow = document.querySelector(".thriller-row")

const showThrillerMovies = async () => {
  const response = await fetch("https://striveschool-api.herokuapp.com/api/movies/Thriller", options);
  const parsedBody = await response.json();
  console.log(parsedBody);

  parsedBody.forEach((movie) => {
    let div1 = document.createElement("div");
    div1.innerHTML = `
              <div class="col-6 col-md-4 col-lg-6">
                <h4>${movie.name}</h4>
                <h6>${movie.description}</h6>
                <a href="./backOffice.html?userId=${movie._id}&${movie.category}">
                <img class="img-fluid row-images" style="height:200px; width:400px;" src="${movie.imageUrl}">   
        </div>
            `;
    thrillerRow.appendChild(div1);
  });
};


let fantasyRow = document.querySelector(".fantasy-row")

const showFantasyMovies = async () => {
  const response = await fetch("https://striveschool-api.herokuapp.com/api/movies/Fantasy", options);
  const parsedBody = await response.json();
  console.log(parsedBody);

  parsedBody.forEach((movie) => {
    let div1 = document.createElement("div");
    div1.innerHTML = `
              <div class="col-6 col-md-4 col-lg-6">
      <h4>${movie.name}</h4>
      <h6>${movie.description}</h6>
      <a href="./backOffice.html?userId=${movie._id}&${movie.category}">
      <img class="img-fluid row-images" style="height:200px; width:400px;" src="${movie.imageUrl}">   
        </div>
            `;
    fantasyRow.appendChild(div1);
  });
};


let CrimeRow = document.querySelector(".crime-row")

const showCrimeMovies = async () => {
  const response = await fetch("https://striveschool-api.herokuapp.com/api/movies/Crime", options);
  const parsedBody = await response.json();
  console.log(parsedBody);

  parsedBody.forEach((movie) => {
    let div1 = document.createElement("div");
    div1.innerHTML = `
              <div class="col-6 col-md-4 col-lg-6">
      <h4>${movie.name}</h4>
      <h6>${movie.description}</h6>
      <a href="./backOffice.html?userId=${movie._id}&${movie.category}">
      <img class="img-fluid row-images" style="height:200px; width:400px;" src="${movie.imageUrl}">   
        </div>
            `;
    CrimeRow.appendChild(div1);
  });
};

window.onload = () => {
  showThrillerMovies();
  showFantasyMovies();
  showCrimeMovies();
}