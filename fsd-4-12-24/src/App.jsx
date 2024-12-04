
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Counter from './components/Counter'
import Home from './components/Home'

function App() {
  

  return (
    <>
        <Router>
            <Routes>
            <Route path = "/" element = { <Home /> } />
              <Route path = "/counter" element = { <Counter /> } />
            </Routes>
        </Router>
      
    </>
  )
}

export default App
