import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./Utils/api";
import { useAuth } from "./context/AuthContext";

function LoginSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await loginUser({ email, password });
      if (response.token) {
        login(response.token, response.user);
        navigate("/");
      } else {
        alert(response.error || response.message || "Login failed");
      }
    } catch (error) {
      const message = error.response?.data?.message || error.message || "Login failed";
      alert("Login failed: " + message);
    }
  };

  return (
    <div className="high">
      <section style={{backgroundImage: "url(https://static.vecteezy.com/system/resources/thumbnails/002/017/638/small_2x/a-colorful-light-streaking-from-the-center-on-a-black-night-background-free-video.jpg)"}}>
        <div className="login-box">
          <form onSubmit={(e) => e.preventDefault()}>
            <h2>Login</h2>
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
            <div className="remember-forgot">
              <label><input type="checkbox" /> Remember me</label>
              <a href="#">Forgot password?</a>
            </div>
            <button id="loginBtn" type="button" onClick={handleLogin}>
              Login
            </button>
            <div className="register-link">
              <p>Don't have an account? <a href="#">Register</a></p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default LoginSignup;
