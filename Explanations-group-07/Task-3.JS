"use strict";

let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
  Souls: {
    publisher: "Fromsoftware",
    bestThree: {
      one: "Dark souls III",
      two: "bloodborne",
      three: "Sekiro",
      fours: "Elden ring", // loop takes three keys only
    },
    price: 40,
  },
};

// To Get Object Length ?
let objectLength = Object.keys(myFavGames).length; // keys() -> converts obj to arr

for (let i = 0; i < objectLength; i++) {
  let gameName = Object.keys(myFavGames)[i]; // Treat myFavGames as an array and choose first element
  let game = myFavGames[gameName]; // Go to myFavGames, get a key named gameName[i]
  console.log(
    game === myFavGames.Souls
      ? `- These above were Elzero's games, Mine are ${gameName}: `
      : ``,
  );

  console.log(`The Game Name Is ${gameName}`);
  console.log(`The Publisher Is ${game.publisher}`);
  console.log(`The Price Is ${game.price}`);

  if (game.bestThree !== undefined) {
    console.log("- Game Has Releases");
    console.log(`First => ${game.bestThree.one}`);
    console.log(`Second => ${game.bestThree.two}`);
    console.log(`Third => ${game.bestThree.three}`);
  }
  console.log("#".repeat(20));
}

// Ouput

// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"
// "These above was Elzero's games, mine is Souls: "
// "The Game Name Is Souls"
// "The Publisher Is Fromsoftware"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Dark souls III"
// "Second => bloodborne"
// "Third => Sekiro"
// "####################"
