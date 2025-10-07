import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MoviesByLanguage = () => {
  const { language } = useParams(); // Get language from URL
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://animaxapp-new-2.onrender.com/getMoviesByLanguage/${language}`)
      .then((response) => {
        console.log("API Response:", response.data); // Debugging
        if (Array.isArray(response.data.movieList)) {
          setMovies(response.data.movieList);
        } else {
          console.error("Unexpected API response:", response.data);
          setMovies([]); // Fallback to empty array
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [language]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Movies in {language}</h2>
      {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <img src={movie.img} alt={movie.movie} style={{ width: "60px", marginRight: "10px" }} />
              <strong>{movie.movie}</strong> - {movie.category} - Rating: {movie.rating}
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies found in this language.</p>
      )}
    </div>
  );
};

export default MoviesByLanguage;
