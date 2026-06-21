import { useState } from 'react'
import NameCard from './components/NameCard'
import ProgressGrid from './components/ProgressGrid'
import './App.css'

function App() {
  <img src="/public/The Noor Corner.png" alt="The Noor Corner" style={{ width: '120px', marginBottom: '16px' }} />
  const [showProgress, setShowProgress] = useState(false)

  // Track which names have been seen based on days passed
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000
  )
  
  // All name numbers up to today are considered "seen"
  const seenNumbers = Array.from({ length: dayOfYear % 99 }, (_, i) => i + 1)

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0f1f0f',
      color: '#f5f0e8',
      fontFamily: 'Georgia, serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px'
    }}>
      
      <h1 style={{ 
        color: '#c9a84c', 
        fontSize: '1.2rem', 
        letterSpacing: '3px',
        textTransform: 'uppercase',
        marginBottom: '8px'
      }}>
        The Noor Corner
      </h1>

      <p style={{ 
        color: '#7a9e7a', 
        fontSize: '0.9rem',
        marginBottom: '48px'
      }}>
        Asma ul-Husna — The 99 Names of Allah
      </p>

      <NameCard />

      <button
        onClick={() => setShowProgress(!showProgress)}
        style={{
          marginTop: '48px',
          backgroundColor: 'transparent',
          border: '1px solid #c9a84c',
          color: '#c9a84c',
          padding: '10px 24px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '0.9rem',
          letterSpacing: '1px'
        }}
      >
        {showProgress ? 'Hide Progress' : 'View Progress'}
      </button>

      {showProgress && (
        <div style={{ marginTop: '32px', width: '100%', maxWidth: '500px' }}>
          <ProgressGrid seenNumbers={seenNumbers} />
        </div>
      )}

    </div>
  )
}

export default App