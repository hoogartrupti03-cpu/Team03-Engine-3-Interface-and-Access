import './Preferences.css'

function Preferences({ onSubmit, onBack }) {

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const preferences = {
      room: formData.get('room'),
      length: Number(formData.get('length')),
      width: Number(formData.get('width')),
      style: formData.get('style'),
      colour: formData.get('colour'),
      budget: Number(formData.get('budget'))
    }

    try {
      const response = await fetch(
        'http://localhost:5000/api/preferences',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            roomType: preferences.room,
            length: preferences.length,
            width: preferences.width,
            style: preferences.style,
            colour: preferences.colour,
            budget: preferences.budget
          })
        }
      )

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to submit preferences')
      }

      alert('Preferences submitted successfully!')

      onSubmit(preferences)

    } catch (error) {
      console.error('Backend Error:', error)
      alert('Unable to connect to the backend. Please check your server.')
    }
  }

  return (
    <div className="preferences-page">
      <div className="preferences-card">

        <button
          type="button"
          className="preferences-back"
          onClick={onBack}
        >
          ← Back
        </button>

        <p className="preferences-tag">PERSONALISE YOUR SPACE</p>

        <h1>Tell Us About Your Room</h1>

        <p className="preferences-description">
          Enter your room details and preferences
          to discover suitable interior designs.
        </p>

        <form onSubmit={handleSubmit}>

          <label>Room Type</label>
          <select name="room" required defaultValue="">
            <option value="" disabled>Select your room</option>
            <option value="Living Room">Living Room</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Dining Room">Dining Room</option>
          </select>

          <label>Room Dimensions (in feet)</label>

          <div className="dimension-inputs">
            <input
              type="number"
              name="length"
              placeholder="Length"
              min="1"
              step="0.1"
              required
            />

            <input
              type="number"
              name="width"
              placeholder="Width"
              min="1"
              step="0.1"
              required
            />
          </div>

          <label>Preferred Design Style</label>
          <select name="style" required defaultValue="">
            <option value="" disabled>Select a style</option>
            <option value="Modern">Modern</option>
            <option value="Minimalist">Minimalist</option>
            <option value="Traditional">Traditional</option>
            <option value="Contemporary">Contemporary</option>
            <option value="Luxury">Luxury</option>
          </select>

          <label>Preferred Colour Theme</label>
          <select name="colour" required defaultValue="">
            <option value="" disabled>Select a colour theme</option>
            <option value="Neutral">Neutral</option>
            <option value="Warm">Warm</option>
            <option value="Cool">Cool</option>
            <option value="Pastel">Pastel</option>
            <option value="Dark">Dark</option>
          </select>

          <label>Estimated Budget (₹)</label>
          <input
            type="number"
            name="budget"
            placeholder="Enter your budget"
            min="1"
            required
          />

          <button type="submit" className="recommend-button">
            Find My Designs
          </button>

        </form>
      </div>
    </div>
  )
}

export default Preferences
