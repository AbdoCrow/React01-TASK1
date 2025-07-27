import MovieCard from "../components/Movie-Card";
import "../App.css";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const movies = [
    {
      id: "tt0111161",
      title: "The Shawshank Redemption",
      year: "1994",
      vote_average: 9.3,
      release_date: "1994-10-14",
      original_language: "en",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
    },
    {
      id: "tt0068646",
      title: "The Godfather",
      year: "1972",
      vote_average: 9.2,
      release_date: "1972-03-24",
      original_language: "en",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      id: "tt0468569",
      title: "The Dark Knight",
      year: "2008",
      vote_average: 9.0,
      release_date: "2008-07-18",
      original_language: "en",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    },
    {
      id: "tt0108052",
      title: "Schindler's List",
      year: "1993",
      vote_average: 9.0,
      release_date: "1993-12-15",
      original_language: "en",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      id: "tt1375666",
      title: "Inception",
      year: "2010",
      vote_average: 8.8,
      release_date: "2010-07-16",
      original_language: "en",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    },
    {
      id: "tt0167260",
      title: "The Lord of the Rings: The Return of the King",
      year: "2003",
      vote_average: 9.0,
      release_date: "2003-12-17",
      original_language: "en",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery("");
    console.log(searchQuery);
  };

  return (
    <div className="home">
      <div className="hero">
        <img src="hero.png" alt="" className="mx-auto" />
        <h2 className="text-5xl font-bold text-center mb-20">
          Find{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Movies
          </span>{" "}
          You Love <br /> Without The Hassle
        </h2>
        <form onSubmit={handleSearch} className="search-form w-full mx-auto">
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-12">
        {movies.map((movie) => (
          movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
