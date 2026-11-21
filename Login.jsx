import './Login.css'

function Login({ onBack, onSignup, onLoginSuccess }) {
  return (
    <div className="login-page">
      <div className="login-card">

        <button
          type="button"
          className="back-btn"
          onClick={onBack}
        >
          ← Back to Home
        </button>

        <h1>Welcome Back</h1>

        <p>
          Login to explore your interior design ideas.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            onLoginSuccess()
          }}
        >
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit">
            Login
          </button>
        </form>

        <p className="signup-text">
          Don't have an account?{' '}

          <button
            type="button"
            className="login-signup-link"
            onClick={onSignup}
          >
            Sign Up
          </button>
        </p>

      </div>
    </div>
  )
}

export default Login
