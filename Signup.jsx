import './Signup.css'

function Signup({ onBack, onLogin }) {
  return (
    <div className="signup-page">
      <div className="signup-card">

        <button className="signup-back" onClick={onBack}>
          ← Back to Home
        </button>

        <h1>Create Account</h1>
        <p>Join us and discover your dream interiors.</p>

        <form onSubmit={(e) => {
          e.preventDefault()
          alert('Registration functionality will be added soon!')
        }}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            required
          />

          <button type="submit">Create Account</button>
        </form>

        <p className="signup-login-text">
          Already have an account?{' '}
          <button type="button" onClick={onLogin}>
            Login
          </button>
        </p>

      </div>
    </div>
  )
}

export default Signup
