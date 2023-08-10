'use strict';


//prompts for user input
let userColor = prompt("Hello! What color would you like the website to be: black or white?");
let userSong = prompt("Whats your favorite song?");

let youtube = document.getElementById("youtube");
let arvoya = document.getElementById("arvoya");
let soundcloud = document.getElementById("soundcloud");
let button = document.getElementById("button");

//***future change is to use class"links" instead of indivudal list items. 
// look up function that changes strings to all lower case 
// changes website color based on choice
if (userColor === "white" || userColor === "White" || userColor === "WHITE") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    youtube.style.color = "black";
    arvoya.style.color = "black";
    soundcloud.style.color = "black";
    button.style.color = "black";

} else if (userColor === "black" || userColor === "Black" || userColor === "BLACK") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    youtube.style.color = "white";
    arvoya.style.color = "white";
    soundcloud.style.color = "white";
    button.style.color = "white";
} else {
    // Handle cases where the user input is neither "white" nor "black"
    alert("Invalid color choice. Please choose either 'white' or 'black'.");
    youtube.style.color = "black";
    arvoya.style.color = "black";
    soundcloud.style.color = "black";
}


// if no song was inputed
if (userSong === ""){
    console.log(userSong);
    alert("Please put in a song!");
    let songRequest = document.createElement("p");
    songRequest.textContent = "A link to your favorite song could have been here!!!"
    //append the new text to div section
    let divSection = document.querySelector("div");
    divSection.appendChild(songRequest);

} else {
//if song was inputed
let favoriteSongLink = document.createElement("a");
favoriteSongLink.href = "https://www.youtube.com/results?search_query=" + encodeURIComponent(userSong);
favoriteSongLink.target = "_blank";
favoriteSongLink.textContent = "Click Me";
favoriteSongLink.style.color = document.body.style.color;

// Append the new link to the main section
let mainSection = document.querySelector("main");
document.write(userSong + "! I love " + userSong + "!");
mainSection.appendChild(favoriteSongLink);

}


// Add event listeners for hover effect
youtube.addEventListener("mouseover", function() {
    this.style.color = "red";
});

youtube.addEventListener("mouseout", function() {
    
    this.style.color = document.body.style.color;
});

arvoya.addEventListener("mouseover", function() {
    this.style.color = "green";
})

arvoya.addEventListener("mouseout", function() {
    this.style.color = document.body.style.color;
})

soundcloud.addEventListener("mouseover", function() {
    this.style.color = "orange";
})

soundcloud.addEventListener("mouseout", function() {
    this.style.color = document.body.style.color;
})