import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MovieSearchWithLanguage = () => {
  const [title, setTitle] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch movies whenever title or language changes (with debounce)
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMovies();
    }, 500); // 500ms debounce

    return () => clearTimeout(timer);
  }, [title, selectedLanguage]);

  const fetchMovies = async () => {
    if (!title.trim() && !selectedLanguage) {
      setMovies([]);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Decide which endpoint to call
      let url = `https://animaxapp-new-2.onrender.com/movies`;

      if (title && selectedLanguage) {
        url = `https://animaxapp-new-2.onrender.com/getMovieByTitle/${title}`;
      } else if (title) {
        url = `http://localhost:5400/getMovieByTitle/${title}`;
      } else if (selectedLanguage) {
        url = `https://animaxapp-new-2.onrender.com/getMoviesByLanguage/${selectedLanguage}`;
      }

      const response = await axios.get(url);
      let data = response.data.movieList || [];

      // Filter by language if both title and language are selected
      if (title && selectedLanguage) {
        data = data.filter(
          (m) =>
            m.language.toLowerCase() === selectedLanguage.toLowerCase()
        );
      }

      if (data.length === 0) setError("No movies found.");
      setMovies(data);
    } catch (err) {
      setMovies([]);
      setError("No movies found.");
    } finally {
      setLoading(false);
    }
  };


  // Get all languages from the backend for dropdown
  const [allLanguages, setAllLanguages] = useState([]);
  useEffect(() => {
    axios.get("https://animaxapp-new-2.onrender.com/movies")
      .then((response) => {
        let movieList = response.data.movieList || [];
        const langs = Array.from(new Set(movieList.map((movie) => movie.language))).filter(Boolean);
        setAllLanguages(langs);
      })
      .catch(() => setAllLanguages([]));
  }, []);

  return (
    <div>
      <h2>Search Movies</h2>
      <input
        type="text"
        placeholder="Type movie title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "8px", width: "300px", marginRight: "10px" }}
      />
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
        style={{ padding: "8px", marginLeft: "10px" }}
      >
        <option value="">All Languages</option>
        {allLanguages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul className="search-results">
        {movies.map((movie) => (
          <li key={movie.id} className="search-item">
            <img
              src={movie.img}
              alt={movie.movie}
              onError={(e) => { e.target.src = "/default-movie.jpg"; }}
            />
            <div>
              <Link to={`/movies/${movie.id}`}>
                {movie.movie}
              </Link>
              <p>Language: {movie.language}</p>
              <p>Genre: {movie.category}</p>
              <p>Director: {movie.director}</p>
              <p>Year: {movie.year}</p>
              <p>Rating: {movie.rating ?? "N/A"}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearchWithLanguage;
