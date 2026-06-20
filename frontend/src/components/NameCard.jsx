import { NAMES } from '../data/names'

function getTodaysName() {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000
  )
  return NAMES[dayOfYear % 99]
}

export default function NameCard() {
  const name = getTodaysName()

  return (
    <div style={{
      backgroundColor: '#1a2e1a',
      border: '1px solid #2d4a2d',
      borderRadius: '12px',
      padding: '48px 40px',
      textAlign: 'center',
      maxWidth: '480px',
      width: '100%'
    }}>
      <p style={{ color: '#7a9e7a', fontSize: '0.85rem', marginBottom: '24px' }}>
        Name {name.number} of 99
      </p>
      <h1 style={{ 
        fontSize: '3.5rem', 
        color: '#c9a84c',
        marginBottom: '16px',
        direction: 'rtl'
      }}>
        {name.arabic}
      </h1>
      <h2 style={{ 
        fontSize: '1.6rem', 
        color: '#f5f0e8',
        marginBottom: '8px',
        fontWeight: 'normal'
      }}>
        {name.transliteration}
      </h2>
      <p style={{ 
        fontSize: '1.1rem', 
        color: '#7a9e7a',
        fontStyle: 'italic',
        marginBottom: '24px'
      }}>
        {name.meaning}
      </p>
      {name.reflection && name.reflection.trim() !== '' && (
        <p style={{ 
          fontSize: '0.95rem', 
          color: '#b0c4b0',
          lineHeight: '1.7',
          borderTop: '1px solid #2d4a2d',
          paddingTop: '24px'
        }}>
          {name.reflection}
        </p>
      )}
    </div>
  )
}