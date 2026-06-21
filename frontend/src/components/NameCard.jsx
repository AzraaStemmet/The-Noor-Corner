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
      backgroundColor: '#c8956a',
      border: '1px solid #f0e8e0',
      borderRadius: '12px',
      padding: '48px 40px',
      textAlign: 'center',
      maxWidth: '480px',
      width: '100%'
    }}>
      <p style={{ color: '#7a8a9e', fontSize: '0.85rem', marginBottom: '24px' }}>
        Name {name.number} of 99
      </p>
      <h1 style={{ 
        fontSize: '3.5rem', 
        color: '#a03060',
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
        color: '#7a8a9e',
        fontStyle: 'italic',
        marginBottom: '24px'
      }}>
        {name.meaning}
      </p>
      {name.reflection && name.reflection.trim() !== '' && (
        <p style={{ 
          fontSize: '0.95rem', 
          color: '#7a8a9e',
          lineHeight: '1.7',
          borderTop: '1px solid #f0e8e0',
          paddingTop: '24px'
        }}>
          {name.reflection}
        </p>
      )}
    </div>
  )
}