// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import MoviesByLanguage from "./MoviesByLanguage";
// import MovieDetails from "./MovieDetails";
// import Movies from "./Movies";
// import MovieTitle from "./MovieTitle";
// import MovieSearchWithLanguage from "./MovieSearchWithLanguage";
// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <nav style={{ padding: "10px", background: "#f5f5f5", marginBottom: "20px" }}>
//         <Link to="/movies" style={{ marginRight: "15px" }}>All Movies</Link>
//         <Link to="/languages/English" style={{ marginRight: "15px" }}>English Movies</Link>
//   <Link to="/search" style={{ marginRight: "15px" }}>Movie Search</Link>
        
//       </nav>

//       <Routes>
//         <Route path="/" element={<Movies />} /> 
//         <Route path="/movies" element={<Movies />} />
//         <Route path="/movies/:id" element={<MovieDetails />} />
//         <Route path="/languages/:language" element={<MoviesByLanguage />} />
//         <Route path="/title/:title" element={<MovieTitle />} />
//   <Route path="/search" element={<MovieSearchWithLanguage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import './App.css';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';

import Screen from './Screen';
import Sports from './Sports';
import Subscription from './Subscription';
import Notfound from './Notfound';

import Products from './practise/Products';
import Firstmovie from './apply/Firstmovie';
import SecondMovie from './complex/SecondMovie';
import MunnaBhayya from './duplex/MunnaBhayya';
import JhonSnow from './Death/JhonSnow';
import Jack from './bacho/Jack';
import Vidyuth from './martial/Vidyuth';
import Hellboy from './animal/Hellboy';
import Naruto from './anime/Naruto';
import Prabhas from './superhit/Prabhas';
import Case from './cid/Case';
import Runner from './bigboss/Runner';
import LoginSignup from './LoginSignup';
import Signup from './Signup';
import Hello from './Hello';
import Movies from './Movies';
import MoviesByLanguage from './MoviesByLanguage';
import MovieTitle from './MovieTitle';
import MovieSearchWithLanguage from './MovieSearchWithLanguage';
import MovieDetails from './MovieDetails';
import { AuthProvider, useAuth } from './context/AuthContext';
import Ram from './ramayan/Ram';
import Arjun from './mahabharat/Arjun';
import Jetahlal from './tarakmehtha/Jetahlal';
import Teja from './hanuman/Teja';
import Sahoo from './saaho/Sahoo';
import Aditya from './radhesyam/Aditya';
import Ranbir from './sandeepreddy/Ranbir';

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

function AppContent() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/hello' element={<Hello />} />
        <Route path='/movies' element={<Screen />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/subscription' element={<Subscription />} />

        <Route path='/Products' element={<Products/>}/>
        <Route path='*' element={<Notfound />} />
        <Route path='/firstmovie' element={<Firstmovie />} />
        <Route path='/secondmovie' element={<SecondMovie />} />
        <Route path='/munnabhayya' element={<MunnaBhayya />} />
        <Route path='/jhonsnow' element={<JhonSnow/>} />
         <Route path='/jack' element={<Jack/>} />
         <Route path='/vidyuth' element={<Vidyuth/>} />
         <Route path='/hellboy' element={<Hellboy/>} />
         <Route path='/naruto' element={<Naruto/>} />
         <Route path='/prabhas' element={<Prabhas/>} />
         <Route path='/case' element={<Case/>} />
         <Route path='/Runner' element={<Runner/>} />
         <Route path='/Ram' element={<Ram/>} />
         <Route path='/Arjun' element={<Arjun/>} />
         <Route path='/Jetahlal' element={<Jetahlal/>} />
         <Route path='/Teja' element={<Teja/>} />
         <Route path='/Sahoo' element={<Sahoo/>} />
         <Route path='/Aditya' element={<Aditya/>} />
         <Route path='/Ranbir' element={<Ranbir/>} />

         <Route path='/login' element={<LoginSignup/>} />
         <Route path='/signup' element={<Signup/>} />
         <Route path='/sign' element={<Main/>} />
        <Route path='/home' element={<Main />} />
//         <Route path="/movies" element={<Movies />} />
//         <Route path="/movies/:id" element={<MovieDetails />} />
//         <Route path="/languages/:language" element={<MoviesByLanguage />} />
//         <Route path="/title/:title" element={<MovieTitle />} />
//   <Route path="/search" element={<MovieSearchWithLanguage />} />

      </Routes>
    </div>
  );
}

export default App;
