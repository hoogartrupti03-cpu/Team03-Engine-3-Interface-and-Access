import { useState } from 'react'
import './App.css'

import Login from './Login'
import Signup from './Signup'
import Preferences from './Preferences'
import Results from './Results'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const [userPreferences, setUserPreferences] = useState(null)

  // Receive preferences after successful database submission
  const handlePreferenceSubmit = (preferences) => {
    setUserPreferences(preferences)
    setShowPreferences(false)
    setShowResults(true)
  }

  // Results Page
  if (showResults && userPreferences) {
    return (
      <Results
        preferences={userPreferences}
        onBack={() => {
          setShowResults(false)
          setShowPreferences(true)
        }}
      />
    )
  }

  // Preferences Page
  if (showPreferences) {
    return (
      <Preferences
        onBack={() => setShowPreferences(false)}
        onSubmit={handlePreferenceSubmit}
      />
    )
  }

  // Signup Page
  if (showSignup) {
    return (
      <Signup
        onBack={() => setShowSignup(false)}
        onLogin={() => {
          setShowSignup(false)
          setShowLogin(true)
        }}
      />
    )
  }

  // Login Page
  if (showLogin) {
    return (
      <Login
        onBack={() => setShowLogin(false)}
        onSignup={() => {
          setShowLogin(false)
          setShowSignup(true)
        }}
        onLoginSuccess={() => {
          setShowLogin(false)
          setShowPreferences(true)
        }}
      />
    )
  }

  // Home Page
  const rooms = [
    {
      name: 'Living Room',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800'
    },
    {
      name: 'Bedroom',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800'
    },
    {
      name: 'Kitchen',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'
    },
    {
      name: 'Dining Room',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
    }
  ]

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Interior<span>Space</span></h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#rooms">Explore Designs</a>
          <a href="#about">About</a>

          <button
            className="nav-login"
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-tag">DESIGN YOUR DREAM SPACE</p>

          <h1>
            Create a Home That
            <br />
            Reflects Your Style
          </h1>

          <p>
            Discover beautiful interior designs tailored
            to your room, preferences and budget.
          </p>

          <button
            className="hero-button"
            onClick={() => setShowLogin(true)}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Room Selection */}
      <section className="rooms-section" id="rooms">
        <p className="section-tag">EXPLORE OUR COLLECTION</p>

        <h2>Design Ideas for Every Room</h2>

        <p className="section-description">
          Find inspiration for every corner of your home.
        </p>

        <div className="rooms-container">
          {rooms.map((room, index) => (
            <div className="room-card" key={index}>
              <img src={room.image} alt={room.name} />

              <h3>{room.name}</h3>

              <button onClick={() => setShowLogin(true)}>
                Explore
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <p className="section-tag">ABOUT OUR PROJECT</p>

        <h2>Interior Design Made Simple</h2>

        <p>
          Our Interior Design Recommendation System helps users
          discover suitable interior designs based on their room
          dimensions, preferred style, colour choices and budget.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h3>InteriorSpace</h3>
        <p>Design your space. Reflect your style.</p>
        <p>© 2026 Interior Design Recommendation System</p>
      </footer>

    </div>
  )
}

export default App
