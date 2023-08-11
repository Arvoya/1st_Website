'use strict';

//changes background and text color based on user input
function getBlackorWhite() {

    let userColor = prompt("Hello! What color would you like the website to be: black or white?");

    // makes sure it can only be 'white' or 'black'
    if (userColor === "" || userColor === null) {
        alert("Invalid color choice. Please choose either 'white' or 'black'.");
        getBlackorWhite();
    } else if (userColor.toLowerCase() === "white") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        return;
    } else if (userColor.toLowerCase() === "black") {
        console.log(userColor);
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        return;
    } else {
        alert("Invalid color choice. Please choose either 'white' or 'black'.");
        getBlackorWhite();
        return;
    }
}

//creates a youtube search link based on user input
function createSongLink() {

    let userSong = prompt("Whats your favorite song?");

    //makes sure an input is given
    if (userSong === "" || userSong === null) {
        alert("Please put in a song!");
        createSongLink();
    } else {
        //creates a new link for user to use
        let favoriteSongLink = document.createElement("a");
        favoriteSongLink.href = "https://www.youtube.com/results?search_query=" + encodeURIComponent(userSong);
        favoriteSongLink.target = "_blank";
        favoriteSongLink.textContent = "Click Me";
        favoriteSongLink.style.color = document.body.style.color;
        //appends the link within the html file looking for 'main' element
        let mainSection = document.querySelector("main");
        document.write("Listen to your favorite song!");
        mainSection.appendChild(favoriteSongLink);
    }
    return;
}

//changes color of links to match text
function linkColorChange() {

    // creates variables based off of elements
    let youtube = document.getElementById("youtube");
    let arvoya = document.getElementById("arvoya");
    let soundcloud = document.getElementById("soundcloud");
    let button = document.getElementById("button");

    // let links = document.getElementsByClassName("links");
    // console.log(links);
    // links.style.color = document.body.style.color;

    // ^ come back when you understand loops

    // changes links color within html file based off of users answer
    button.style.color = document.body.style.color;
    youtube.style.color = document.body.style.color;
    arvoya.style.color = document.body.style.color;
    soundcloud.style.color = document.body.style.color;
    return;

}

// changes the hover-color of links
function hoverColor(element, color) {

    // notices and changes when mouse hovers over link
    element.addEventListener("mouseover", function () {
        this.style.color = color;
    })

    // notices and changes when mouse leaves the link
    element.addEventListener("mouseout", function () {
        this.style.color = document.body.style.color
    })

}

//gets a number to print, then prints
function relaxMeter() {

    let ZenNum = prompt("How relaxed are you at the moment, on a scale of 1-10? ");

    if ( (ZenNum > 0 && ZenNum < 11 ) || typeof ZenNum !== "string") {
        alert("Lets zen out!");
        let printCount = ZenNum;
        for(let i = printCount; i > 0; i--) {
            document.write("<img src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Yin_and_Yang_symbol.svg/800px-Yin_and_Yang_symbol.svg.png' alt='Yin and Yang image' </img>");
            console.log("round: ", i);
        }
    } else {
        alert("Oops! Please use a number between 1-10!");
        relaxMeter();
    }

}
