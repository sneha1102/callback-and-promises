// In nodejs, whenever we write a piece of code that requires disc access or network access, it is asynchronous.
// How to deal with asynchronous code?


//Callback Hell or the christmas tree problem


const id = 2;

getMovieFromDatabase(id, function(movie) {
    getDirectorOfMovie(movie.name, function(director) {
        getNumberOfHitsForTheDirector(director.directorName, function(hits) {
            console.log(hits);
        });
        
    })
});



//Get a movie from the DB
    //Then For the movie I will get its director
        //Then For the director, I will get the number of hits he has given


//Callback function
function getMovieFromDatabase(id, callback) {
    setTimeout(() => {
        console.log("Read the movie from the DB");
        callback({id: id, name: "Lagaan", actor: "Aamir Khan"});
    }, 2000);
}

function getDirectorOfMovie(name, callback) {
    setTimeout(() => {
        console.log("Read the director for the movie from the DB");
        callback({name: name, directorName: "Ashutosh"});
    }, 1000);
}

function getNumberOfHitsForTheDirector(director, callback) {
    setTimeout(() => {
        console.log("Read the hits for director from the DB");
        callback({directorName: director, hits: 10});
    }, 1000);
}
