import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5400";

// Fetch all movies
export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movies`);
    return response.data.movieList;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

// Fetch movie details
export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movies/${id}`);
    return response.data.movie;
  } catch (error) {
    console.error("Error fetching movie:", error);
    return null;
  }
};

// Fetch movies by language
export const fetchMoviesByLanguage = async (language) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getMoviesByLanguage/${language}`);
    return response.data.movieList;
  } catch (error) {
    console.error("Error fetching movies by language:", error);
    return [];
  }
};

// Fetch movies by title
export const fetchMoviesByTitle = async (title) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getMovieByTitle/${title}`);
    return response.data.movieList;
  } catch (error) {
    console.error("Error fetching movies by title:", error);
    return [];
  }
};

// User Signup
export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error("Signup failed:", error);
    throw error;
  }
};

// User Login
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    return { error: "Login failed" };
  }
};
