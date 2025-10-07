import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useAuth } from "./context/AuthContext";

export default function Nav() {
  const [title, setTitle] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allLanguages, setAllLanguages] = useState([]);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

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
      let url = `http://localhost:5400/movies`;

      if (title && selectedLanguage) {
        url = `http://localhost:5400/getMovieByTitle/${title}`;
      } else if (title) {
        url = `http://localhost:5400/getMovieByTitle/${title}`;
      } else if (selectedLanguage) {
        url = `http://localhost:5400/getMoviesByLanguage/${selectedLanguage}`;
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
  useEffect(() => {
    axios.get("http://localhost:5400/movies")
      .then((response) => {
        let movieList = response.data.movieList || [];
        const langs = Array.from(new Set(movieList.map((movie) => movie.language))).filter(Boolean);
        setAllLanguages(langs);
      })
      .catch(() => setAllLanguages([]));
  }, []);

  return (
    <div className="page">
      <nav className="navbar">
        <Link to="/home">
          <div className="logo">
            <img src="https://media.designrush.com/agencies/816283/conversions/AnimaX-logo-profile.jpg"
              alt="" width="100px" height="70px" />
          </div>
        </Link>
        <ul className="nav-links">
          <li className="nav-items"><NavLink to="/hello">Tv</NavLink></li>
          <li className="nav-items"><NavLink to="/Movies">Movies</NavLink></li>
          <li className="nav-items"><NavLink to="/sports">Sports</NavLink></li>
          <li className="nav-items">Premium</li>

          <div className="right-container">
            <input
              type="text"
              placeholder="Search movie ..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="search-box"
            />
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              style={{ padding: "8px", marginLeft: "10px" }}
              className="language-dropdown"
            >
              <option value="" className="option-dropdown">All Languages</option>
              {allLanguages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                  
                </option>
              ))}
            </select>
            <button id="sub-btn" type="button"><NavLink to="/subscription">subscribe</NavLink></button>
            {isLoggedIn ? (
              <button onClick={() => { logout(); navigate('/login'); }}>Logout</button>
            ) : (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
              </>
            )}
          </div>
        </ul>
      </nav>
      <br /><br /><br /><br />

      {/* Search Results */}
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
}
