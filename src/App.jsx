
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './reset.css';
import './App.css';
import MainHome from './components/MainHome';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainHome />}></Route>
      </Routes>
    </>
  )
}

export default App;
