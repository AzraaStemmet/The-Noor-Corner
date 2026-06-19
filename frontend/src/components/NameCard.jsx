import { NAMES } from '../data/names';

function getTodaysName() {
  // Cycles through all 99 names based on the day of year
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000
  );
  return NAMES[dayOfYear % 99];
}

export default function NameCard() {
  const name = getTodaysName();

  return (
    <div className="name-card">
      <p className="name-number">Name {name.number} of 99</p>
      <h1 className="arabic">{name.arabic}</h1>
      <h2 className="transliteration">{name.transliteration}</h2>
      <p className="meaning">{name.meaning}</p>
      <blockquote className="reflection">{name.reflection}</blockquote>
    </div>
  );
}