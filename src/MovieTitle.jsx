import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieByTitle = () => {
  const { title } = useParams(); // Get title from URL
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5400/getMovieByTitle/${title}`)
      .then((response) => {
        console.log("API Response:", response.data); // Debugging
        if (response.data && Array.isArray(response.data.movieList)) {
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
  }, [title]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Movies with title: {title}</h2>
      {movies.length > 0 ? (
        <ul className="search-results">
          {movies.map((movie) => (
            <li key={movie.id} className="search-item">
              <img src={movie.img} alt={movie.movie} />
              <div>
                <strong>{movie.movie}</strong> - {movie.category} - Rating: {movie.rating}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies found with this title.</p>
      )}
    </div>
  );
};

export default MovieByTitle;
