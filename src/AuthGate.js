import { useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, persistenceReady } from './firebase';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setError('');
    try {
      await persistenceReady;
      await signInWithEmailAndPassword(auth, email.trim(), password);
    } catch (err) {
      if (err && err.code === 'auth/too-many-requests') {
        setError('Prea multe încercări. Încearcă din nou mai târziu.');
      } else if (err && err.code === 'auth/network-request-failed') {
        setError('Eroare de rețea. Verifică conexiunea la internet.');
      } else {
        setError('Email sau parolă incorectă.');
      }
      setBusy(false);
    }
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-header-icon" aria-hidden="true">
          ⚓
        </div>
        <div>
          <h1 className="app-header-title">Examen CAA</h1>
          <p className="app-header-sub">Ambarcațiuni de agrement</p>
        </div>
      </header>
      <div className="exam-card login-card">
        <h2>Autentificare</h2>
        <p className="exam-subtitle">Introdu emailul și parola primite.</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="practice-select-label" htmlFor="login-email">
            Email
          </label>
          <input
            id="login-email"
            className="login-input"
            type="email"
            name="email"
            autoComplete="username"
            inputMode="email"
            autoCapitalize="none"
            autoCorrect="off"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="practice-select-label" htmlFor="login-password">
            Parolă
          </label>
          <input
            id="login-password"
            className="login-input"
            type="password"
            name="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <p className="login-error" role="alert">
              {error}
            </p>
          )}
          <button type="submit" className="btn login-submit" disabled={busy}>
            {busy ? 'Se verifică…' : 'Intră în cont'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AuthGate({ children }) {
  // undefined = still resolving, null = signed out, object = signed in
  const [user, setUser] = useState(undefined);

  useEffect(() => onAuthStateChanged(auth, (u) => setUser(u || null)), []);

  if (user === undefined) {
    return (
      <div className="app-shell">
        <p className="exam-subtitle login-loading">Se încarcă…</p>
      </div>
    );
  }
  if (user === null) return <LoginScreen />;
  return children;
}
