import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ConfigPage from './configs/configPage';

function App() {
  return (
    <Router>
      <Routes>
        {ConfigPage.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.layout>{<route.page/>}</route.layout>}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
