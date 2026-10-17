import { useCallback, useEffect, useMemo, useState } from 'react';
import Quiz from 'react-quiz-component';
import { questions as colregQuiz } from './questions';
import { questions as legislatieQuiz } from './questionsLegislatie';
import { questions as navigatieQuiz } from './questionsNavigatie';
import { questions as manevraQuiz } from './questionsManevra';
import { questions as clasaCQuiz } from './questionsClasaC';
import { questions as clasaDQuiz } from './questionsClasaD';

const STORAGE_KEY = 'caa-progress-v2';
const PREFS_KEY = 'caa-prefs-v1';
const LICENSE_CLASSES = ['A', 'B', 'C', 'D'];

const COLREG_SECTIONS = [
  { id: 'CAA-EN-Generalitati', label: 'COLREG · Generalități', count: 8, difficulty: 1 },
  { id: 'CAA-EN-Lumini si semne', label: 'COLREG · Lumini și semne', count: 8, difficulty: 1 },
  { id: 'CAA-EN-Reguli de guvernare', label: 'COLREG · Reguli de guvernare', count: 8, difficulty: 1 },
  { id: 'CAA-EN-Semnale sonore', label: 'COLREG · Semnale sonore', count: 6, difficulty: 1 },
];

const NAVIGATIE_SECTIONS = [
  { id: 'Navigatie maritima', label: 'Navigație maritimă', count: 30, difficulty: 1 },
];

const MANEVRA_SECTIONS = [
  { id: 'Manevra meteo hidrologie', label: 'Manevra / Meteo / Hidrologie', count: 30, difficulty: 1 },
];

const LEGISLATIE_SECTIONS = [
  { id: 'Autoritati', label: 'Legislație · Autorități', count: 3, difficulty: 1 },
  { id: 'Contraventii', label: 'Legislație · Contravenții', count: 6, difficulty: 1 },
  { id: 'Infractiuni', label: 'Legislație · Infracțiuni', count: 4, difficulty: 1 },
  { id: 'Ambarcatiune', label: 'Legislație · Ambarcațiune', count: 4, difficulty: 1 },
  { id: 'Personal navigant', label: 'Legislație · Personal navigant', count: 4, difficulty: 1 },
  { id: 'Siguranta navigatiei', label: 'Legislație · Siguranța navigației', count: 4, difficulty: 1 },
  { id: 'Teritoriu maritim', label: 'Legislație · Teritoriu maritim', count: 3, difficulty: 1 },
  { id: 'Conventii', label: 'Legislație · Convenții', count: 2, difficulty: 1 },
];

const CLASA_C_SECTIONS = clasaCQuiz.examConfig.sections;
const CLASA_D_SECTIONS = clasaDQuiz.examConfig.sections;

const PRACTICE_SECTIONS_AB = [
  ...COLREG_SECTIONS,
  ...NAVIGATIE_SECTIONS,
  ...MANEVRA_SECTIONS,
  ...LEGISLATIE_SECTIONS,
];

const PRACTICE_SECTIONS_BY_CLASS = {
  A: PRACTICE_SECTIONS_AB,
  B: PRACTICE_SECTIONS_AB,
  C: CLASA_C_SECTIONS,
  D: CLASA_D_SECTIONS,
};

/** Exam subjects from barem. Only subjects with `available` can be started. */
const EXAM_SUBJECTS = [
  {
    id: 'colreg',
    label: 'COLREG',
    timeMinutes: 30,
    totalQuestions: 30,
    minCorrect: 24,
    barem: 8,
    observation: 'În limba engleză',
    classes: ['A', 'B'],
    available: true,
    sections: COLREG_SECTIONS,
  },
  {
    id: 'navigatie',
    label: 'Navigație maritimă',
    timeMinutes: 30,
    totalQuestions: 30,
    minCorrect: 21,
    barem: 7,
    observation: '',
    classes: ['A', 'B'],
    available: true,
    sections: NAVIGATIE_SECTIONS,
  },
  {
    id: 'manevra',
    label: 'Manevra navei. Meteorologie. Hidrologie.',
    timeMinutes: 30,
    totalQuestions: 30,
    minCorrect: 21,
    barem: 7,
    observation: '',
    classes: ['A', 'B'],
    available: true,
    sections: MANEVRA_SECTIONS,
  },
  {
    id: 'constructie',
    label: 'Construcția navei. Vitalitate',
    timeMinutes: 30,
    totalQuestions: 30,
    minCorrect: 21,
    barem: 7,
    observation: '',
    classes: ['A'],
    available: false,
    sections: [],
  },
  {
    id: 'legislatie',
    label: 'Legislație maritimă',
    timeMinutes: 30,
    totalQuestions: 30,
    minCorrect: 21,
    barem: 7,
    observation: '',
    classes: ['A', 'B'],
    available: true,
    sections: LEGISLATIE_SECTIONS,
  },
  {
    id: 'dunare',
    label: 'Regulamentul de navigație pe Dunăre și canal',
    timeMinutes: 30,
    totalQuestions: 30,
    minCorrect: 24,
    barem: 8,
    observation: '',
    classes: ['A'],
    available: false,
    sections: [],
  },
  {
    id: 'clasa-c',
    label: 'Examen Clasa C',
    timeMinutes: 30,
    totalQuestions: 26,
    minCorrect: 22,
    barem: null,
    observation: 'Un singur test · barem ANR 22/26',
    classes: ['C'],
    available: true,
    sections: CLASA_C_SECTIONS,
  },
  {
    id: 'clasa-d',
    label: 'Examen Clasa D',
    timeMinutes: 30,
    totalQuestions: 26,
    minCorrect: 22,
    barem: null,
    observation: 'Un singur test · barem ANR 22/26',
    classes: ['D'],
    available: true,
    sections: CLASA_D_SECTIONS,
  },
];

const APP_LOCALE = {
  landingHeaderText: '<questionLength> Intrebari',
  question: 'Intrebare',
  startQuizBtn: 'Incepe',
  resultFilterAll: 'Toate',
  resultFilterCorrect: 'Correct',
  resultFilterIncorrect: 'Incorect',
  prevQuestionBtn: 'Inapoi',
  nextQuestionBtn: 'Inainte',
  multipleSelectionTagText: 'Selectie multipla',
  resultPageHeaderText:
    'Ai terminat. Ai <correctIndexLength> raspunsuri corecte din <questionLength> total.',
  pickNumberOfSelection: 'Alege <numberOfSelection>',
  marksOfQuestion: '(<marks> puncte)',
};

function tagQuestions(list, discipline) {
  return list.map((question) => ({ ...question, discipline }));
}

const QUESTIONS_AB = [
  ...tagQuestions(colregQuiz.questions, 'COLREG'),
  ...tagQuestions(navigatieQuiz.questions, 'Navigație maritimă'),
  ...tagQuestions(manevraQuiz.questions, 'Manevra / Meteo / Hidrologie'),
  ...tagQuestions(legislatieQuiz.questions, 'Legislație maritimă'),
];

const QUESTIONS_BY_CLASS = {
  A: QUESTIONS_AB,
  B: QUESTIONS_AB,
  C: tagQuestions(clasaCQuiz.questions, 'Clasa C'),
  D: tagQuestions(clasaDQuiz.questions, 'Clasa D'),
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

function sampleExamQuestions(fullQuestions, sections) {
  const bySection = {};
  fullQuestions.forEach((question) => {
    const key = question.section || 'UNKNOWN';
    if (!bySection[key]) bySection[key] = [];
    bySection[key].push(question);
  });

  const picked = [];
  sections.forEach((section) => {
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

function defaultSubjectForClass(licenseClass) {
  const subjects = EXAM_SUBJECTS.filter((subject) => subject.classes.includes(licenseClass));
  return subjects.find((subject) => subject.available)?.id || subjects[0]?.id || 'colreg';
}

function loadPrefs() {
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;
    const licenseClass = LICENSE_CLASSES.includes(parsed.licenseClass)
      ? parsed.licenseClass
      : 'A';
    const subjects = EXAM_SUBJECTS.filter((subject) => subject.classes.includes(licenseClass));
    const examSubjectId = subjects.some((subject) => subject.id === parsed.examSubjectId)
      ? parsed.examSubjectId
      : defaultSubjectForClass(licenseClass);
    return {
      licenseClass,
      examSubjectId,
      practiceSection:
        typeof parsed.practiceSection === 'string' ? parsed.practiceSection : 'all',
    };
  } catch {
    return null;
  }
}

function savePrefs(prefs) {
  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  } catch {
    /* ignore */
  }
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.activeKeys)) return null;
    const licenseClass = LICENSE_CLASSES.includes(parsed.licenseClass)
      ? parsed.licenseClass
      : 'A';
    return {
      licenseClass,
      subjectId: parsed.subjectId || null,
      mode: parsed.mode || 'exam',
      activeKeys: parsed.activeKeys,
      answered: parsed.answered && typeof parsed.answered === 'object' ? parsed.answered : {},
      endsAt: typeof parsed.endsAt === 'number' ? parsed.endsAt : null,
      practiceSection: parsed.practiceSection || 'all',
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
  const initialPrefs = useMemo(() => loadPrefs(), []);
  const [phase, setPhase] = useState('menu'); // menu | running | result
  const [licenseClass, setLicenseClass] = useState(initialPrefs?.licenseClass || 'A');
  const [mode, setMode] = useState('exam'); // exam | practice
  const [examSubjectId, setExamSubjectId] = useState(
    () => initialPrefs?.examSubjectId || defaultSubjectForClass(initialPrefs?.licenseClass || 'A'),
  );
  const [activeSubjectId, setActiveSubjectId] = useState(null);
  const [activeKeys, setActiveKeys] = useState([]);
  const [answered, setAnswered] = useState({});
  const [runQuestions, setRunQuestions] = useState([]);
  const [runId, setRunId] = useState(0);
  const [resultFilter, setResultFilter] = useState('answered');
  const [endsAt, setEndsAt] = useState(null);
  const [secondsLeft, setSecondsLeft] = useState(null);
  const [practiceSection, setPracticeSection] = useState(initialPrefs?.practiceSection || 'all');

  const fullQuestions = useMemo(
    () => normalizeQuestions(QUESTIONS_BY_CLASS[licenseClass] || QUESTIONS_AB),
    [licenseClass],
  );

  const practiceSections = useMemo(
    () => PRACTICE_SECTIONS_BY_CLASS[licenseClass] || PRACTICE_SECTIONS_AB,
    [licenseClass],
  );

  const isSingleExamClass = licenseClass === 'C' || licenseClass === 'D';

  const classSubjects = useMemo(
    () => EXAM_SUBJECTS.filter((subject) => subject.classes.includes(licenseClass)),
    [licenseClass],
  );

  const activeSubject = useMemo(
    () => EXAM_SUBJECTS.find((subject) => subject.id === activeSubjectId) || null,
    [activeSubjectId],
  );

  const selectedExamSubject = useMemo(() => {
    const match = classSubjects.find((subject) => subject.id === examSubjectId);
    if (match) return match;
    return classSubjects.find((subject) => subject.available) || classSubjects[0] || null;
  }, [classSubjects, examSubjectId]);

  const setLicenseClassAndReset = useCallback(
    (nextClass) => {
      if (nextClass === licenseClass) return;
      setLicenseClass(nextClass);
      setPracticeSection('all');
      const nextSubjects = EXAM_SUBJECTS.filter((subject) => subject.classes.includes(nextClass));
      const keep =
        nextSubjects.find((subject) => subject.id === examSubjectId && subject.available) ||
        nextSubjects.find((subject) => subject.available) ||
        nextSubjects[0];
      setExamSubjectId(keep?.id || nextSubjects[0]?.id || 'colreg');
    },
    [licenseClass, examSubjectId],
  );

  // Resume in-progress run if present
  useEffect(() => {
    const saved = loadProgress();
    if (!saved || !saved.activeKeys.length) return;
    const pool = normalizeQuestions(QUESTIONS_BY_CLASS[saved.licenseClass] || QUESTIONS_AB);
    const keySet = new Set(saved.activeKeys);
    const known = pool.some((question) => keySet.has(question.question));
    if (!known) return;

    const remaining = computeRunQuestions(pool, saved.activeKeys, saved.answered);
    const timedOut = saved.endsAt != null && Date.now() >= saved.endsAt;
    setLicenseClass(saved.licenseClass);
    setMode(saved.mode);
    setActiveSubjectId(saved.subjectId);
    setExamSubjectId(
      saved.subjectId || defaultSubjectForClass(saved.licenseClass),
    );
    setPracticeSection(saved.practiceSection || 'all');
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
    // eslint-disable-next-line react-hooks/exhaustive-deps -- resume once on mount
  }, []);

  useEffect(() => {
    savePrefs({ licenseClass, examSubjectId, practiceSection });
  }, [licenseClass, examSubjectId, practiceSection]);

  useEffect(() => {
    if (phase !== 'running' && phase !== 'result') return;
    if (!activeKeys.length) return;
    saveProgress({
      licenseClass,
      subjectId: activeSubjectId,
      mode,
      activeKeys,
      answered,
      endsAt,
      practiceSection,
    });
  }, [phase, licenseClass, activeSubjectId, mode, activeKeys, answered, endsAt, practiceSection]);

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
    const subject = selectedExamSubject;
    if (!subject?.available) return;
    const sampled = sampleExamQuestions(fullQuestions, subject.sections);
    const keys = sampled.map((question) => question.question);
    const end = Date.now() + subject.timeMinutes * 60 * 1000;
    setMode('exam');
    setActiveSubjectId(subject.id);
    setActiveKeys(keys);
    setAnswered({});
    setRunQuestions(sampled);
    setEndsAt(end);
    setResultFilter('answered');
    setRunId((id) => id + 1);
    setPhase('running');
  }, [fullQuestions, selectedExamSubject]);

  const startPractice = useCallback(() => {
    const pool =
      practiceSection === 'all'
        ? fullQuestions
        : fullQuestions.filter((question) => question.section === practiceSection);
    const keys = pool.map((question) => question.question);
    setMode('practice');
    setActiveSubjectId(null);
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
    setActiveSubjectId(null);
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
      setEndsAt(
        mode === 'exam' && activeSubject
          ? Date.now() + activeSubject.timeMinutes * 60 * 1000
          : null,
      );
      setResultFilter('answered');
      setRunId((id) => id + 1);
      setPhase('running');
    },
    [mode, activeSubject],
  );

  const activeSet = useMemo(() => {
    const keySet = new Set(activeKeys);
    return fullQuestions.filter((question) => keySet.has(question.question));
  }, [activeKeys, fullQuestions]);

  const answeredCount = activeSet.filter((question) => question.question in answered).length;
  const correctSoFar = activeSet.filter((question) => entryIsCorrect(answered[question.question])).length;
  const incorrectSoFar = answeredCount - correctSoFar;

  useEffect(() => {
    if (phase !== 'running' || !activeKeys.length) return;
    if (answeredCount > 0 && answeredCount >= activeKeys.length) {
      setPhase('result');
      setRunQuestions([]);
    }
  }, [phase, activeKeys, answeredCount]);

  const quizData = useMemo(
    () => ({
      quizTitle: activeSubject?.label || 'Antrenament',
      quizSynopsis: '',
      progressBarColor: '#9de1f6',
      appLocale: APP_LOCALE,
      questions: runQuestions,
      nrOfQuestions: String(runQuestions.length),
    }),
    [activeSubject, runQuestions],
  );

  const sectionCounts = useMemo(() => {
    const counts = {};
    practiceSections.forEach((section) => {
      counts[section.id] = fullQuestions.filter((question) => question.section === section.id).length;
    });
    return counts;
  }, [fullQuestions, practiceSections]);

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
    const minCorrect = activeSubject?.minCorrect ?? total;
    const passed = mode === 'exam' ? correctCount >= minCorrect : correctCount === total;
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
              {activeSubject?.label || 'Examen'} · Clasa {licenseClass}
            </h2>
            <p className="exam-subtitle">
              {passed
                ? `Ai trecut (≥ ${minCorrect} răspunsuri corecte, barem ${activeSubject?.barem}).`
                : `Nu ai atins baremul: minim ${minCorrect} corecte din ${total} (barem ${activeSubject?.barem}).`}
            </p>
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
              · minim: {minCorrect}/{total}
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
                {question.section && (
                  <p className="review-section-tag">
                    {question.discipline ? `${question.discipline} · ` : ''}
                    {question.section}
                  </p>
                )}
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
    activeSubject,
    licenseClass,
    restartWithFailed,
    restartSameMode,
    backToMenu,
    renderAnswerReview,
  ]);

  if (phase === 'menu') {
    const examReady = Boolean(selectedExamSubject?.available);

    return (
      <div className="exam-menu">
        <div className="exam-card">
          <h2>Conducător ambarcațiune de agrement</h2>
          <p className="exam-subtitle">Alege clasa, apoi antrenament sau examen</p>
          <div className="class-toggle" role="group" aria-label="Clasa de personal">
            {LICENSE_CLASSES.map((cls) => (
              <button
                key={cls}
                type="button"
                className={licenseClass === cls ? 'active' : ''}
                onClick={() => setLicenseClassAndReset(cls)}
              >
                Clasa {cls}
              </button>
            ))}
          </div>
        </div>

        <div className="exam-card practice-card">
          <h3>Antrenament</h3>
          <p className="exam-subtitle">
            Fără cronometru · banca Clasa {licenseClass} ({fullQuestions.length} întrebări)
          </p>
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
            {!isSingleExamClass && (
              <>
                <optgroup label="COLREG">
                  {COLREG_SECTIONS.map((section) => (
                    <option key={section.id} value={section.id}>
                      {section.label.replace(/^COLREG · /, '')} ({sectionCounts[section.id] || 0})
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Navigație maritimă">
                  {NAVIGATIE_SECTIONS.map((section) => (
                    <option key={section.id} value={section.id}>
                      {section.label} ({sectionCounts[section.id] || 0})
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Manevra / Meteo / Hidrologie">
                  {MANEVRA_SECTIONS.map((section) => (
                    <option key={section.id} value={section.id}>
                      {section.label} ({sectionCounts[section.id] || 0})
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Legislație maritimă">
                  {LEGISLATIE_SECTIONS.map((section) => (
                    <option key={section.id} value={section.id}>
                      {section.label.replace(/^Legislație · /, '')} (
                      {sectionCounts[section.id] || 0})
                    </option>
                  ))}
                </optgroup>
              </>
            )}
            {isSingleExamClass &&
              practiceSections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.label} ({sectionCounts[section.id] || 0})
                </option>
              ))}
          </select>
          <button type="button" className="btn continue-btn" onClick={startPractice}>
            Începe antrenamentul
          </button>
        </div>

        <div className="exam-card">
          <h3>Examen · Clasa {licenseClass}</h3>
          <p className="exam-subtitle">
            {licenseClass === 'A' &&
              '6 discipline (inclusiv Construcția navei și Regulament Dunăre)'}
            {licenseClass === 'B' &&
              '4 discipline (fără Construcția navei și Regulament Dunăre)'}
            {licenseClass === 'C' && 'Un singur test · 26 întrebări · 30 min · minim 22 corecte'}
            {licenseClass === 'D' && 'Un singur test · 26 întrebări · 30 min · minim 22 corecte'}
          </p>

          <table className="exam-table barem-table">
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Timp</th>
                <th>Întrebări</th>
                <th>Minim</th>
                <th>Barem</th>
              </tr>
            </thead>
            <tbody>
              {classSubjects.map((subject) => {
                const selected = selectedExamSubject?.id === subject.id;
                return (
                  <tr
                    key={subject.id}
                    className={[
                      selected ? 'barem-row-selected' : '',
                      subject.available ? 'barem-row-available' : 'barem-row-soon',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    onClick={() => {
                      if (subject.available) setExamSubjectId(subject.id);
                    }}
                  >
                    <td>
                      {subject.label}
                      {subject.observation ? (
                        <span className="barem-note"> · {subject.observation}</span>
                      ) : null}
                      {!subject.available ? (
                        <span className="barem-note"> · în curând</span>
                      ) : null}
                    </td>
                    <td>{subject.timeMinutes} min</td>
                    <td>{subject.totalQuestions}</td>
                    <td>
                      {subject.minCorrect}/{subject.totalQuestions}
                    </td>
                    <td>{subject.barem ?? '—'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {!isSingleExamClass && (
            <>
              <label className="practice-select-label" htmlFor="exam-subject">
                Disciplina de examinat
              </label>
              <select
                id="exam-subject"
                className="practice-select"
                value={selectedExamSubject?.id || ''}
                onChange={(event) => setExamSubjectId(event.target.value)}
              >
                {classSubjects.map((subject) => (
                  <option key={subject.id} value={subject.id} disabled={!subject.available}>
                    {subject.label}
                    {!subject.available ? ' (în curând)' : ''} — minim {subject.minCorrect}/
                    {subject.totalQuestions}
                    {subject.barem != null ? `, barem ${subject.barem}` : ''}
                  </option>
                ))}
              </select>
            </>
          )}

          {selectedExamSubject?.available && selectedExamSubject.sections.length > 0 && (
            <table className="exam-table" style={{ marginTop: 14 }}>
              <thead>
                <tr>
                  <th>Secțiunea (extragere)</th>
                  <th>Nr.</th>
                  <th>În bancă</th>
                </tr>
              </thead>
              <tbody>
                {selectedExamSubject.sections.map((section) => (
                  <tr key={section.id}>
                    <td>{section.label.replace(/^(COLREG|Legislație) · /, '')}</td>
                    <td>{section.count}</td>
                    <td>{sectionCounts[section.id] || 0}</td>
                  </tr>
                ))}
                <tr className="exam-total-row">
                  <td>Total</td>
                  <td>{selectedExamSubject.totalQuestions}</td>
                  <td />
                </tr>
              </tbody>
            </table>
          )}

          {!examReady && (
            <p className="exam-subtitle" style={{ marginTop: 12 }}>
              Banca de întrebări pentru această disciplină nu este încă disponibilă.
            </p>
          )}

          <button
            type="button"
            className="btn exam-start-btn"
            onClick={startExam}
            disabled={!examReady}
          >
            {examReady
              ? `Începe ${selectedExamSubject.label} (${selectedExamSubject.totalQuestions} întrebări · minim ${selectedExamSubject.minCorrect})`
              : 'Examen indisponibil'}
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
            {mode === 'exam'
              ? `Examen · Clasa ${licenseClass}${activeSubject ? ` · ${activeSubject.label}` : ''}`
              : 'Antrenament'}
            : <strong>{answeredCount}</strong> / {activeSet.length}
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
