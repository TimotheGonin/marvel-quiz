import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from '../Header'
import Landing from '../Landing'
import Footer from '../Footer'
import Welcome from '../Welcome'
import Login from '../Login'
import SignUp from '../SignUp'
import ErrorPage from '../ErrorPage'

import '../../App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
