import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './pages/Main'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  )
}

export default App
