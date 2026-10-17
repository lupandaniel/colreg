import { useCallback, useEffect, useMemo, useState } from 'react';
import Quiz from 'react-quiz-component';
import { questions as rawQuiz } from './questions';

const STORAGE_KEY = 'colreg-caa-progress-v1';

const examConfig = rawQuiz.examConfig || {
  personnelCategory: 'CLASA A,B',
  timeMinutes: 30,
  passPercent: 80,
  modelName: 'COLREG CAA',
  sections: [],
  totalQuestions: 30,
};

function preserveQuestionNumber(text) {
  return typeof text === 'string' ? text.replace(/^(\s*\d+)\./, '$1\u200B.') : text;
}

function normalizeQuestions(questionList) {
  return questionList.map((question) => {
    const normalized = { ...question, question: preserveQuestionNumber(question.question) };
    const type = normalized.answerSelectionType || 'single';
    if (type === 'single' && Array.isArray(normalized.correctAnswer)) {
      normalized.correctAnswer = String(normalized.correctAnswer[0]);
    }
    return normalized;
  });
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function sampleExamQuestions(fullQuestions, config) {
  const bySection = {};
  fullQuestions.forEach((question) => {
    const key = question.section || 'UNKNOWN';
    if (!bySection[key]) bySection[key] = [];
    bySection[key].push(question);
  });

  const picked = [];
  config.sections.forEach((section) => {
    const pool = bySection[section.id] || [];
    const take = Math.min(section.count, pool.length);
    picked.push(...shuffle(pool).slice(0, take));
  });
  return shuffle(picked);
}

function isAnswerCorrect(question, userAnswer) {
  const type = question.answerSelectionType || 'single';

  if (type === 'single') {
    if (userAnswer === undefined || userAnswer === null) return false;
    const correct = Array.isArray(question.correctAnswer)
      ? Number(question.correctAnswer[0])
      : Number(question.correctAnswer);
    return Number(userAnswer) === correct;
  }

  const correct = (question.correctAnswer || []).map(Number).sort((a, b) => a - b);
  const given = Array.isArray(userAnswer) ? userAnswer.map(Number).sort((a, b) => a - b) : [];
  return correct.length === given.length && correct.every((value, index) => value === given[index]);
}

function correctIndexes(question) {
  if (Array.isArray(question.correctAnswer)) return question.correctAnswer.map(Number);
  return [Number(question.correctAnswer)];
}

function selectedIndexes(userAnswer) {
  if (Array.isArray(userAnswer)) return userAnswer.map(Number);
  if (userAnswer === undefined || userAnswer === null) return [];
  return [Number(userAnswer)];
}

const entryIsCorrect = (entry) =>
  entry != null && (typeof entry === 'object' ? entry.correct === true : entry === true);

const entryUserAnswer = (entry) => (entry && typeof entry === 'object' ? entry.userAnswer : undefined);

function formatTime(totalSeconds) {
  const safe = Math.max(0, totalSeconds);
  const m = Math.floor(safe / 60);
  const s = safe % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.activeKeys)) return null;
    return {
      mode: parsed.mode || 'exam',
      activeKeys: parsed.activeKeys,
      answered: parsed.answered && typeof parsed.answered === 'object' ? parsed.answered : {},
      endsAt: typeof parsed.endsAt === 'number' ? parsed.endsAt : null,
    };
  } catch {
    return null;
  }
}

function saveProgress(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
}

function computeRunQuestions(fullQuestions, activeKeys, answered) {
  const keySet = new Set(activeKeys);
  return fullQuestions.filter(
    (question) => keySet.has(question.question) && !(question.question in answered),
  );
}

function QuizApp() {
  const fullQuestions = useMemo(() => normalizeQuestions(rawQuiz.questions), []);

  const [phase, setPhase] = useState('menu'); // menu | running | result
  const [mode, setMode] = useState('exam'); // exam | practice
  const [activeKeys, setActiveKeys] = useState([]);
  const [answered, setAnswered] = useState({});
  const [runQuestions, setRunQuestions] = useState([]);
  const [runId, setRunId] = useState(0);
  const [resultFilter, setResultFilter] = useState('answered');
  const [endsAt, setEndsAt] = useState(null);
  const [secondsLeft, setSecondsLeft] = useState(null);
  const [practiceSection, setPracticeSection] = useState('all');

  // Resume in-progress exam/practice if present
  useEffect(() => {
    const saved = loadProgress();
    if (!saved || !saved.activeKeys.length) return;
    const keySet = new Set(saved.activeKeys);
    const known = fullQuestions.some((question) => keySet.has(question.question));
    if (!known) return;

    const remaining = computeRunQuestions(fullQuestions, saved.activeKeys, saved.answered);
    const timedOut = saved.endsAt != null && Date.now() >= saved.endsAt;
    setMode(saved.mode);
    setActiveKeys(saved.activeKeys);
    setAnswered(saved.answered);
    setEndsAt(saved.endsAt);
    if (timedOut || remaining.length === 0) {
      setPhase('result');
      setRunQuestions([]);
    } else {
      setRunQuestions(remaining);
      setPhase('running');
    }
  }, [fullQuestions]);

  useEffect(() => {
    if (phase !== 'running' && phase !== 'result') return;
    if (!activeKeys.length) return;
    saveProgress({ mode, activeKeys, answered, endsAt });
  }, [phase, mode, activeKeys, answered, endsAt]);

  // Countdown timer (exam only)
  useEffect(() => {
    if (phase !== 'running' || mode !== 'exam' || endsAt == null) {
      setSecondsLeft(null);
      return undefined;
    }

    const tick = () => {
      const left = Math.ceil((endsAt - Date.now()) / 1000);
      setSecondsLeft(left);
      if (left <= 0) {
        setPhase('result');
        setRunQuestions([]);
      }
    };
    tick();
    const id = setInterval(tick, 250);
    return () => clearInterval(id);
  }, [phase, mode, endsAt]);

  const startExam = useCallback(() => {
    const sampled = sampleExamQuestions(fullQuestions, examConfig);
    const keys = sampled.map((question) => question.question);
    const end = Date.now() + examConfig.timeMinutes * 60 * 1000;
    setMode('exam');
    setActiveKeys(keys);
    setAnswered({});
    setRunQuestions(sampled);
    setEndsAt(end);
    setResultFilter('answered');
    setRunId((id) => id + 1);
    setPhase('running');
  }, [fullQuestions]);

  const startPractice = useCallback(() => {
    const pool =
      practiceSection === 'all'
        ? fullQuestions
        : fullQuestions.filter((question) => question.section === practiceSection);
    const keys = pool.map((question) => question.question);
    setMode('practice');
    setActiveKeys(keys);
    setAnswered({});
    setRunQuestions(pool);
    setEndsAt(null);
    setResultFilter('answered');
    setRunId((id) => id + 1);
    setPhase('running');
  }, [fullQuestions, practiceSection]);

  const handleQuestionSubmit = useCallback((data) => {
    const key = data.question.question;
    const correct = isAnswerCorrect(data.question, data.userAnswer);
    setAnswered((prev) =>
      key in prev ? prev : { ...prev, [key]: { correct, userAnswer: data.userAnswer } },
    );
  }, []);

  const finishNow = useCallback(() => {
    setResultFilter('answered');
    setPhase('result');
    setRunQuestions([]);
  }, []);

  const backToMenu = useCallback(() => {
    setPhase('menu');
    setActiveKeys([]);
    setAnswered({});
    setRunQuestions([]);
    setEndsAt(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const restartSameMode = useCallback(() => {
    if (mode === 'exam') startExam();
    else startPractice();
  }, [mode, startExam, startPractice]);

  const restartWithFailed = useCallback(
    (failedQuestions) => {
      const keys = failedQuestions.map((question) => question.question);
      setActiveKeys(keys);
      setAnswered({});
      setRunQuestions(failedQuestions);
      setEndsAt(mode === 'exam' ? Date.now() + examConfig.timeMinutes * 60 * 1000 : null);
      setResultFilter('answered');
      setRunId((id) => id + 1);
      setPhase('running');
    },
    [mode],
  );

  const activeSet = useMemo(() => {
    const keySet = new Set(activeKeys);
    return fullQuestions.filter((question) => keySet.has(question.question));
  }, [activeKeys, fullQuestions]);

  const answeredCount = activeSet.filter((question) => question.question in answered).length;
  const correctSoFar = activeSet.filter((question) => entryIsCorrect(answered[question.question])).length;
  const incorrectSoFar = answeredCount - correctSoFar;

  // When every question in the run is answered, show our result screen
  useEffect(() => {
    if (phase !== 'running' || !activeKeys.length) return;
    if (answeredCount > 0 && answeredCount >= activeKeys.length) {
      setPhase('result');
      setRunQuestions([]);
    }
  }, [phase, activeKeys, answeredCount]);

  const quizData = useMemo(
    () => ({
      ...rawQuiz,
      questions: runQuestions,
      nrOfQuestions: String(runQuestions.length),
    }),
    [runQuestions],
  );

  const sectionCounts = useMemo(() => {
    const counts = {};
    examConfig.sections.forEach((section) => {
      counts[section.id] = fullQuestions.filter((question) => question.section === section.id).length;
    });
    return counts;
  }, [fullQuestions]);

  const renderAnswerReview = useCallback(
    (question) => {
      const entry = answered[question.question];
      const correctSet = correctIndexes(question);
      const userSet = selectedIndexes(entryUserAnswer(entry));

      return (
        <div className="review-answers">
          {question.answers.map((answer, index) => {
            const oneBased = index + 1;
            const isCorrect = correctSet.includes(oneBased);
            const isPicked = userSet.includes(oneBased);
            const className = [
              'review-answer',
              isCorrect ? 'correct' : '',
              !isCorrect && isPicked ? 'incorrect' : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <div key={index} className={className}>
                <span>{answer}</span>
                {isCorrect && <span className="review-tag">răspuns corect</span>}
                {!isCorrect && isPicked && <span className="review-tag">răspunsul tău</span>}
              </div>
            );
          })}
        </div>
      );
    },
    [answered],
  );

  const statusOf = useCallback(
    (question) => {
      if (!(question.question in answered)) return 'unanswered';
      return entryIsCorrect(answered[question.question]) ? 'correct' : 'incorrect';
    },
    [answered],
  );

  const renderResultUI = useCallback(() => {
    const total = activeSet.length;
    const correctQuestions = activeSet.filter((question) => statusOf(question) === 'correct');
    const incorrectQuestions = activeSet.filter((question) => statusOf(question) === 'incorrect');
    const unansweredQuestions = activeSet.filter((question) => statusOf(question) === 'unanswered');
    const correctCount = correctQuestions.length;
    const percent = total ? Math.round((correctCount / total) * 100) : 0;
    const passed = mode === 'exam' ? percent >= examConfig.passPercent : correctCount === total;
    const answeredTotal = total - unansweredQuestions.length;

    const reviewQuestions = activeSet.filter((question) => {
      const status = statusOf(question);
      if (resultFilter === 'all') return true;
      if (resultFilter === 'answered') return status === 'correct' || status === 'incorrect';
      return status === resultFilter;
    });

    const badge = {
      correct: 'badge correct-badge',
      incorrect: 'badge incorrect-badge',
      unanswered: 'badge unanswered-badge',
    };
    const badgeIcon = { correct: '✓', incorrect: '✗', unanswered: '–' };

    return (
      <div className="quiz-result-custom">
        {mode === 'exam' ? (
          <>
            <p className={`exam-verdict ${passed ? 'passed' : 'failed'}`}>
              {passed ? 'ADMIS' : 'RESPINS'}
            </p>
            <h2>
              {passed
                ? `Ai trecut examenul (≥ ${examConfig.passPercent}%).`
                : `Nu ai atins pragul de ${examConfig.passPercent}%.`}
            </h2>
          </>
        ) : (
          <h2>
            {correctCount === total
              ? 'Felicitări! Ai răspuns corect la toate întrebările.'
              : 'Rezultatul antrenamentului'}
          </h2>
        )}

        <p className="score-line">
          Scor: <strong>{correctCount}</strong> / {total} ({percent}%)
          {mode === 'exam' && (
            <>
              {' '}
              · prag: {examConfig.passPercent}%
            </>
          )}
        </p>
        <p className="score-line muted">
          Răspunse: <strong>{answeredTotal}</strong> · Corecte:{' '}
          <strong className="score-correct">{correctCount}</strong> · Greșite:{' '}
          <strong className="score-incorrect">{incorrectQuestions.length}</strong>
          {unansweredQuestions.length > 0 && (
            <>
              {' '}
              · Fără răspuns: <strong>{unansweredQuestions.length}</strong>
            </>
          )}
        </p>

        <div className="result-actions">
          {incorrectQuestions.length > 0 && mode === 'practice' && (
            <button
              type="button"
              className="btn restart-failed-btn"
              onClick={() => restartWithFailed(incorrectQuestions)}
            >
              Reia doar greșitele ({incorrectQuestions.length})
            </button>
          )}
          <button type="button" className="btn restart-all-btn" onClick={restartSameMode}>
            {mode === 'exam' ? 'Examen nou (alt set)' : 'Reia antrenamentul'}
          </button>
          <button type="button" className="btn continue-btn" onClick={backToMenu}>
            Înapoi la meniu
          </button>
        </div>

        <div className="review-section">
          <div className="review-header">
            <h3>Răspunsuri</h3>
            <div className="review-filter">
              <button
                type="button"
                className={resultFilter === 'answered' ? 'active' : ''}
                onClick={() => setResultFilter('answered')}
              >
                Răspunse ({answeredTotal})
              </button>
              <button
                type="button"
                className={resultFilter === 'correct' ? 'active' : ''}
                onClick={() => setResultFilter('correct')}
              >
                Corecte ({correctCount})
              </button>
              <button
                type="button"
                className={resultFilter === 'incorrect' ? 'active' : ''}
                onClick={() => setResultFilter('incorrect')}
              >
                Greșite ({incorrectQuestions.length})
              </button>
              {unansweredQuestions.length > 0 && (
                <button
                  type="button"
                  className={resultFilter === 'unanswered' ? 'active' : ''}
                  onClick={() => setResultFilter('unanswered')}
                >
                  Fără răspuns ({unansweredQuestions.length})
                </button>
              )}
              <button
                type="button"
                className={resultFilter === 'all' ? 'active' : ''}
                onClick={() => setResultFilter('all')}
              >
                Toate ({total})
              </button>
            </div>
          </div>

          {reviewQuestions.map((question, index) => {
            const status = statusOf(question);
            return (
              <div key={index} className="review-question">
                <p className="review-question-text">
                  <span className={badge[status]}>{badgeIcon[status]}</span>
                  {question.question}
                </p>
                {question.section && <p className="review-section-tag">{question.section}</p>}
                {renderAnswerReview(question)}
              </div>
            );
          })}
        </div>
      </div>
    );
  }, [
    activeSet,
    statusOf,
    resultFilter,
    mode,
    restartWithFailed,
    restartSameMode,
    backToMenu,
    renderAnswerReview,
  ]);

  if (phase === 'menu') {
    return (
      <div className="exam-menu">
        <div className="exam-card">
          <h2>{examConfig.modelName}</h2>
          <p className="exam-subtitle">Categorie personal: {examConfig.personnelCategory}</p>

          <table className="exam-table">
            <thead>
              <tr>
                <th>Secțiunea</th>
                <th>Nr. întrebări</th>
                <th>Dificultate</th>
                <th>În bancă</th>
              </tr>
            </thead>
            <tbody>
              {examConfig.sections.map((section) => (
                <tr key={section.id}>
                  <td>{section.label}</td>
                  <td>{section.count}</td>
                  <td>{section.difficulty}</td>
                  <td>{sectionCounts[section.id] || 0}</td>
                </tr>
              ))}
              <tr className="exam-total-row">
                <td>Total</td>
                <td>{examConfig.totalQuestions}</td>
                <td colSpan={2} />
              </tr>
            </tbody>
          </table>

          <ul className="exam-meta-list">
            <li>
              Timp acordat: <strong>{examConfig.timeMinutes} min</strong>
            </li>
            <li>
              Procentaj de trecere: <strong>{examConfig.passPercent}%</strong>
            </li>
            <li>
              La fiecare examinare se extrag aleatoriu întrebările pe secțiuni.
            </li>
          </ul>

          <button type="button" className="btn exam-start-btn" onClick={startExam}>
            Începe examenul ({examConfig.totalQuestions} întrebări)
          </button>
        </div>

        <div className="exam-card practice-card">
          <h3>Antrenament</h3>
          <p className="exam-subtitle">Fără cronometru · din toată banca ({fullQuestions.length})</p>
          <label className="practice-select-label" htmlFor="practice-section">
            Secțiune
          </label>
          <select
            id="practice-section"
            className="practice-select"
            value={practiceSection}
            onChange={(event) => setPracticeSection(event.target.value)}
          >
            <option value="all">Toate secțiunile</option>
            {examConfig.sections.map((section) => (
              <option key={section.id} value={section.id}>
                {section.label} ({sectionCounts[section.id] || 0})
              </option>
            ))}
          </select>
          <button type="button" className="btn continue-btn" onClick={startPractice}>
            Începe antrenamentul
          </button>
        </div>
      </div>
    );
  }

  if (phase === 'result' || (phase === 'running' && runQuestions.length === 0)) {
    if (activeSet.length > 0) {
      return <div className="react-quiz-container">{renderResultUI()}</div>;
    }
    return null;
  }

  const timerUrgent = secondsLeft != null && secondsLeft <= 60;

  return (
    <div className="quiz-app">
      <div className="quiz-progress-banner">
        <div className="banner-stats">
          <span>
            {mode === 'exam' ? 'Examen' : 'Antrenament'}: <strong>{answeredCount}</strong> /{' '}
            {activeSet.length}
          </span>
          <span className="live-score">
            Scor: <strong className="score-correct">{correctSoFar}</strong> corecte
            {incorrectSoFar > 0 && (
              <>
                {' · '}
                <strong className="score-incorrect">{incorrectSoFar}</strong> greșite
              </>
            )}
          </span>
          {secondsLeft != null && (
            <span className={`exam-timer ${timerUrgent ? 'urgent' : ''}`}>
              Timp: <strong>{formatTime(secondsLeft)}</strong>
            </span>
          )}
        </div>
        <div className="banner-actions">
          {answeredCount > 0 && (
            <button type="button" className="finish-now-btn" onClick={finishNow}>
              Finalizează acum
            </button>
          )}
          <button type="button" className="reset-progress-btn" onClick={backToMenu}>
            Anulează
          </button>
        </div>
      </div>

      <Quiz
        key={runId}
        quiz={quizData}
        shuffle={false}
        enableProgressBar={true}
        showInstantFeedback={true}
        showDefaultResult={false}
        onQuestionSubmit={handleQuestionSubmit}
        customResultPage={renderResultUI}
      />
    </div>
  );
}

export default QuizApp;
