import { useState } from 'react';
import './App.css';
import QuizApp from './QuizApp';
import { questions as rawQuiz } from './questions';

const exam = rawQuiz.examConfig;

function App() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <div className="home">
        <header className="home-header">
          <p className="home-eyebrow">{exam?.modelName || 'COLREG CAA'}</p>
          <h1>Examen COLREG – {exam?.personnelCategory || 'CLASA A,B'}</h1>
          <p>
            {exam?.totalQuestions || 30} întrebări · {exam?.timeMinutes || 30} min · trecere{' '}
            {exam?.passPercent || 80}%
          </p>
        </header>
        <div className="category-grid">
          <button
            type="button"
            className="category-card"
            style={{ '--accent': '#9de1f6' }}
            onClick={() => setStarted(true)}
          >
            <span className="category-title">Chestionar grilă</span>
            <span className="category-desc">
              Examen pe secțiuni (Generalități, Lumini și semne, Reguli de guvernare, Semnale
              sonore) sau antrenament din banca de {rawQuiz.questions.length} întrebări.
            </span>
            <span className="category-meta">
              Bancă: {rawQuiz.questions.length} · Model {exam?.modelName}
            </span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="category-view">
      <div className="category-topbar">
        <button type="button" className="back-btn" onClick={() => setStarted(false)}>
          ← Meniu
        </button>
        <span className="category-view-title">
          {exam?.modelName} · {exam?.personnelCategory}
        </span>
      </div>
      <QuizApp />
    </div>
  );
}

export default App;
