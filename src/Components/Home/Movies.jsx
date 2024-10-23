import Card from "./Card";
import { useState, useEffect } from "react";
import "./Movies.css";
import React from "react";

const movies = [
  {
    id: 1,
    name: "The Shawshank Redemption",
    image: "shawshank.jpg",
    year: 2009,
    duration: 108,
    quality: "HD",
  },
  {
    id: 2,
    name: "The Godfather",
    image: "godfather.jpg",
    year: 2009,
    duration: 108,
    quality: "HD",
  },
  {
    id: 3,
    name: "The Dark Knight",
    image: "darkknight.jpg",
    year: 2009,
    duration: 108,
    quality: "HD",
  },
  {
    id: 4,
    name: "Pulp Fiction",
    image: "pulp.jpg",
    year: 2009,
    duration: 108,
    quality: "HD",
  },
  {
    id: 5,
    name: "Forrest Gump",
    image: "pulp.jpg",
    year: 2009,
    duration: 108,
    quality: "HD",
  },
  {
    id: 6,
    name: "Inception",
    image: "inception.jpg",
    year: 2009,
    duration: 108,
    quality: "HD",
  },
  {
    id: 7,
    name: "Fight Club",
    image: "fight.jpg",
    year: 2009,
    duration: 108,
    quality: "HD",
  },
  {
    id: 8,
    name: "The Matrix",
    image: "pulp.jpg",
    year: 2009,
    duration: 108,
    quality: "HD",
  },
  {
    id: 9,
    name: "The Lord of the Rings: The Return of the King",
    image: "pulp.jpg",
    imdbRating: 9.0,
    year: 2009,
    duration: 108,
    quality: "HD",
  },
  {
    id: 10,
    name: "Star Wars: Episode V - The Empire Strikes Back",
    image: "star.jpg",
    year: 2009,
    duration: 108,
    quality: "HD",
  },
  {
    id: 1,
    name: "The Shawshank Redemption",
    image: "shawshank.jpg",
    year: 2009,
    duration: 108,
    quality: "HD",
  },
  {
    id: 2,
    name: "The Godfather",
    image: "godfather.jpg",
    year: 2009,
    duration: 108,
    quality: "HD",
  },
  {
    id: 3,
    name: "The Dark Knight",
    image: "darkknight.jpg",
    year: 2009,
    duration: 108,
    quality: "HD",
  },
  {
    id: 4,
    name: "Pulp Fiction",
    image: "pulp.jpg",
    year: 2009,
    duration: 108,
    quality: "HD",
  },
  {
    id: 5,
    name: "Forrest Gump",
    image: "pulp.jpg",
    year: 2009,
    duration: 108,
    quality: "HD",
  },
  {
    id: 6,
    name: "Inception",
    image: "inception.jpg",
    year: 2009,
    duration: 108,
    quality: "HD",
  },
  {
    id: 7,
    name: "Fight Club",
    image: "fight.jpg",
    year: 2009,
    duration: 108,
    quality: "HD",
  },
  {
    id: 8,
    name: "The Matrix",
    image: "pulp.jpg",
    year: 2009,
    duration: 108,
    quality: "HD",
  },
  {
    id: 9,
    name: "The Lord of the Rings: The Return of the King",
    image: "pulp.jpg",
    imdbRating: 9.0,
    year: 2009,
    duration: 108,
    quality: "HD",
  },
  {
    id: 10,
    name: "Star Wars: Episode V - The Empire Strikes Back",
    image: "star.jpg",
    year: 2009,
    duration: 108,
    quality: "HD",
  },
  {
    id: 10,
    name: "Star Wars: Episode V - The Empire Strikes Back",
    image: "star.jpg",
    year: 2009,
    duration: 108,
    quality: "HD",
  },
  {
    id: 10,
    name: "Star Wars: Episode V - The Empire Strikes Back",
    image: "star.jpg",
    year: 2009,
    duration: 108,
    quality: "HD",
  },
  {
    id: 10,
    name: "Star Wars: Episode V - The Empire Strikes Back",
    image: "star.jpg",
    year: 2009,
    duration: 108,
    quality: "HD",
  },
  {
    id: 10,
    name: "Star Wars: Episode V - The Empire Strikes Back",
    image: "star.jpg",
    year: 2009,
    duration: 108,
    quality: "HD",
  },
];

function Movies() {
  const [displayedMovies, setDisplayedMovies] = useState([]);
  useEffect(() => {
    setDisplayedMovies(movies);
  }, []);

  return (
    <div>
    <h2>Popular Movies</h2>
    <div className="container">
      {displayedMovies.map((movie) => (
        <Card
          cardName={movie.name}
          cardImage={movie.image}
          cardYear={movie.year}
          cardDuration={movie.duration}
          cardQuality={movie.quality}
          key={movie.id}
        />
      ))}
    </div>
    </div>
  );
}
export default Movies;
