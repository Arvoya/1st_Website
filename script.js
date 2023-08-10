'use strict';

let userColor = prompt("Hello! What color would you like the website to be: black or white?");
let userSong = prompt("Whats your favorite song?");

let youtube = document.getElementById("youtube");
let arvoya = document.getElementById("arvoya");
let soundcloud = document.getElementById("soundcloud");
// console.log("test");
// youtube.style.hover ="red";
// console.log("test2");

// changes colors based on choice
if (userColor === "white" || userColor === "White" || userColor === "WHITE") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    youtube.style.color = "black";
    arvoya.style.color = "black";
    soundcloud.style.color = "black";
    // function Handle.mous
} else if (userColor === "black" || userColor === "Black" || userColor === "BLACK") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    youtube.style.color = "white";
    arvoya.style.color = "white";
    soundcloud.style.color = "white";
} else {
    // Handle cases where the user input is neither "white" nor "black"
    alert("Invalid color choice. Please choose either 'white' or 'black'.");
    youtube.style.color = "black";
    arvoya.style.color = "black";
    soundcloud.style.color = "black";
}



console.log("test");
youtube.style.hover ="red";
console.log("test2");