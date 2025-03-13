import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';
import NotFound from './components/NotFound';  // A component to show when no route matches

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
