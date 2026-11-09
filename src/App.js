import './App.css';
import AuthGate from './AuthGate';
import QuizApp from './QuizApp';

function App() {
  return (
    <AuthGate>
      <QuizApp />
    </AuthGate>
  );
}

export default App;
