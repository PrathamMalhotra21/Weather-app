import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import './App.css';
import Layout from './components/layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<ErrorPage />} path='/*' />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
