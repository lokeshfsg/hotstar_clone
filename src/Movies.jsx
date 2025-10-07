import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const renderStars = (rating) => {
  if (!rating) return "N/A";
  const numStars = Math.round(rating);
  return (
    <span>
      {"★".repeat(numStars)}
      {"☆".repeat(5 - numStars)}
      ({rating})
    </span>
  );
};

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    let url = "https://animaxapp-new-2.onrender.com/movies";
    if (selectedLanguage) {
      url = `https://animaxapp-new-2.onrender.com/getMoviesByLanguage/${selectedLanguage}`;
    }
    axios
      .get(url)
      .then((response) => {
        console.log("API Response:", response.data); // Debugging
        if (Array.isArray(response.data)) {
          setMovies(response.data);
        } else if (Array.isArray(response.data.movieList)) {
          setMovies(response.data.movieList);
        } else {
          console.error("Unexpected API response:", response.data);
          setMovies([]); // Fallback to an empty array
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [selectedLanguage]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Get unique languages for dropdown
  const languages = Array.from(new Set(movies.map((movie) => movie.language))).filter(Boolean);

  return (
    <div>
      <h2>Movies List</h2>
      <label htmlFor="language-select">Filter by Language: </label>
      <select
        id="language-select"
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        <option value="">All</option>
        {languages.map((lang) => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>
      <ul className="movie-list-container">
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map((movie) => (
            <li key={movie.id} className="movie-item">
              <img src={movie.img} alt={movie.title} />
              <strong>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </strong>{" "}
              - {movie.language} - {movie.genre} - Rating: {renderStars(movie.rating)}
            </li>
          ))
        ) : (
          <p>No movies available.</p>
        )}
      </ul>
    </div>
  );
};

export default Movies;
