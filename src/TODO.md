# TODO: Add MovieSearchLanguage to Nav.jsx

## Steps to Complete:

1. **Modify Nav.jsx to integrate search functionality:**
   - Add necessary imports: React hooks (useState, useEffect), axios, Link from react-router-dom.
   - Add state variables: title, selectedLanguage, movies, loading, error, allLanguages.
   - Replace existing search input with enhanced input including language dropdown.
   - Add fetchMovies function with debounce logic.
   - Add useEffect to fetch movies on title/language change.
   - Add useEffect to fetch all languages on component mount.
   - Add conditional rendering for loading, error, and search results below the nav bar.

2. **Test the implementation:**
   - Run the app and test search functionality.
   - Verify results display, loading states, and error handling.

## Status:
- [x] Step 1: Modify Nav.jsx
- [x] Step 2: Test implementation (Manual testing recommended)
