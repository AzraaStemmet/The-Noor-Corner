import { NAMES } from '../data/names';

export default function ProgressGrid({ seenNumbers }) {
  return (
    <div className="progress-grid">
      {NAMES.map(name => (
        <div
          key={name.number}
          className={`grid-cell ${seenNumbers.includes(name.number) ? 'seen' : ''}`}
          title={name.transliteration}
        >
          {name.number}
        </div>
      ))}
    </div>
  );
}