import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

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

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5400/movies/${id}`)
      .then((response) => {
        // Support both { movie: {...} } and direct object
        if (response.data && response.data.movie) {
          setMovie(response.data.movie);
        } else if (response.data && typeof response.data === 'object') {
          setMovie(response.data);
        } else {
          setMovie(null);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch movie details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>No movie found.</p>;

  return (
    <div className="movie-details-container">
      <button onClick={() => navigate(-1)}>⬅ Go Back</button>

      <h1>{movie.title}</h1>
      <img
        src={movie.image || "/default-movie.jpg"}
        alt={movie.title}
        className="movie-detail-image"
      />
      <p className="movie-detail-text"><strong>Language:</strong> {movie.language}</p>
      <p className="movie-detail-text"><strong>Genre:</strong> {movie.genre}</p>
      <p className="movie-detail-text"><strong>Director:</strong> {movie.director}</p>
      <p className="movie-detail-text"><strong>Year:</strong> {movie.year}</p>
      <p className="movie-detail-text"><strong>Rating:</strong> {renderStars(movie.rating)}</p>
    </div>
  );
};

export default MovieDetails;
