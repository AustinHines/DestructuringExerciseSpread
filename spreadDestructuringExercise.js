const mcuShows = ["The Falcon And The Winter Soldier","WandaVision"];
const starWarsShows = ["The Mandalorian", "The Clone Wars"];
const disneyPlusShows = [...mcuShows, ...starWarsShows, "Muppets Now"];
console.log(disneyPlusShows);

//2a
const netflixMovies = {
    action: "Extraction",
    drama: "The Irishman"
};

const disneyPlusMovies = {
    musical = "Hamilton",
    drama = "Togo"
};

const streamingMovies = {
    ...netflixMovies,
    ...disneyPlusMovie,
    comedy: "Shazam"
};
console.log(streamingMovies);

//3a
const DisneyJunior = [
    "PJ Mask",
    "Jake and the Neverlan Pirates"
];

const [pj, jake] = disneyJunior;

console.log(pj, jake);

const avengers = {
    captainAmerica: "Steve Rogers",
    theHulk: "Bruce banner"

};

console.log(captainAmerica, theHulk) = avengers;
console.log(captainAmerica, theHulk);

const moreAvengers = {
    blackWidow: "Natasha Romanoff",
    hawkeye: "Clint Baron",
    ironMan: "Tony Stark"
};

const {blackWidow: nat, ...others} = moreAvengers;
console.log(nat, others);

const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
  };

  const all = {
      ...bonus.first,
      ...bonus.second,
      ...bonus.third,
  };