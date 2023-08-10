// 'use strict';

let userColor = prompt("Hello! What color would you like the background to be black or white?");

let arvoya = document.getElementById("arvoya");
let soundcloud = document.getElementById("soundcloud");
// youtube.style.color = "aquamarine";
// arvoya.style.color = "pink";
// soundcloud.style.color = "pink";
// let links = document.getElementsByClassName("links");
// links.style.color = "black";

if (userColor === "white" || userColor === "White" || userColor === "WHITE") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    youtube.style.color = "black";
    arvoya.style.color = "black";
    soundcloud.style.color = "black";
} else if (userColor === "black" || userColor === "Black" || userColor === "BLACK") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    youtube.style.color = "white";
    arvoya.style.color = "white";
    soundcloud.style.color = "white";
} else {
    // Handle cases where the user input is neither "white" nor "black"
    alert("Invalid color choice. Please choose either 'white' or 'black'.");
}
