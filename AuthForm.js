import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';

const AuthForm = () => {
  const [isActive, setIsActive] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsActive(!isActive);
    setErrors({});
  };

  const validateLoginForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const validateSignupForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const newErrors = validateLoginForm();
    if (Object.keys(newErrors).length === 0) {
      // Perform login logic here
      navigate('/'); // Navigate to ExpenseTracker on successful login
    } else {
      setErrors(newErrors);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const newErrors = validateSignupForm();
    if (Object.keys(newErrors).length === 0) {
      // Perform signup logic here
      navigate('/'); // Navigate to ExpenseTracker on successful signup
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section>
      <div className={`container ${isActive ? 'active' : ''}`}>
        <div className="user signinBx">
          <div className="imgBx">
            <img
              src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg"
              alt=""
            />
          </div>
          <div className="formBx">
            <form onSubmit={handleLogin}>
              <h2>Sign In</h2>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && <span className="error">{errors.username}</span>}
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <span className="error">{errors.password}</span>}
              <input type="submit" value="Login" />
              <p className="signup">
                Don't have an account?
                <a href="#" onClick={toggleForm}>
                  Sign Up.
                </a>
              </p>
            </form>
          </div>
        </div>
        <div className="user signupBx">
          <div className="formBx">
            <form onSubmit={handleSignup}>
              <h2>Create an account</h2>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && <span className="error">{errors.username}</span>}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className="error">{errors.email}</span>}
              <input
                type="password"
                name="password"
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <span className="error">{errors.password}</span>}
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
              <input type="submit" value="Sign Up" />
              <p className="signup">
                Already have an account?
                <a href="#" onClick={toggleForm}>
                  Sign In.
                </a>
              </p>
            </form>
          </div>
          <div className="imgBx">
            <img
              src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;

