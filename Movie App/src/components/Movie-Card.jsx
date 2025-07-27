import { useState, useEffect } from "react";

function MovieCard({ movie }) {
  const [isFav, setIsFav] = useState(false);
  //This doesn't do anything. this is just an example before we get into API calls!
  useEffect(() => {
    console.log("📦 Component mounted!");

    // Cleanup 
    return () => {
      console.log("🧹 Component unmounted!");
    };
  }, []); 

  return (
    <div className={`movie-card border-2 ${isFav ? 'border-pink-500' : 'border-gray-700'} rounded-lg p-4 shadow-md bg-black-900 text-white`}>
      <img src={movie.posterUrl} alt={movie.title} className="w-full h-128 object-cover"/>
      <h3>{movie.title}</h3>

      <button onClick={() => setIsFav((prev) => !prev)}>
        {isFav ? "❤️" : "🤍"}
      </button>

      <div className="movie-datails">
        <span>{movie.vote_average} | </span>
        <span>{movie.release_date} | </span>
        <span>{movie.original_language}</span>
      </div>

      
    </div>
  );
}

export default MovieCard;
