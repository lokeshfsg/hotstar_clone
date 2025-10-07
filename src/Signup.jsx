import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "./Utils/api";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await signupUser({ name, email, password });
      if (response.token) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
        navigate("/home");
      } else {
        alert(response.message || "Signup failed");
      }
    } catch (error) {
      const message = error.response?.data?.message || error.message || "Signup failed";
      alert("Signup failed: " + message);
    }
  };

  return (
    <div className="high">
      <section style={{backgroundImage: "url(https://static.vecteezy.com/system/resources/thumbnails/002/017/638/small_2x/a-colorful-light-streaking-from-the-center-on-a-black-night-background-free-video.jpg)"}}>
        <div className="login-box">
          <form onSubmit={(e) => e.preventDefault()}>
            <h2>Signup</h2>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="person"></ion-icon>
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Name</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Password</label>
            </div>
            {/* Removed phone input as per request */}
            <button type="button" onClick={handleSignup}>
              Signup
            </button>
            <div className="register-link">
              <p>Already have an account? <a href="#" onClick={() => navigate("/login")}>Login</a></p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Signup;
