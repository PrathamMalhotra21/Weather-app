import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import './App.css';
import Layout from './components/layout';
import WeatherProvider from './components/Context/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <Router>
        <Layout>
          <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<ErrorPage />} path='/*' />
          </Routes>
        </Layout>
      </Router>
    </WeatherProvider>
  )
}

export default App
