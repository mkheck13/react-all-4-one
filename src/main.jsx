import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SayHelloComponent from './components/SayHelloComponent.jsx'
import AddTwoNumComponent from './components/AddTwoNumComponent.jsx'
import AskingQuestionsComponent from './components/AskingQuestionsComponent.jsx'
import GreaterThenComponent from './components/GreaterThenComponent.jsx'
import MadlibComponent from './components/MadlibComponent.jsx'
import Magic8BallComponent from './components/Magic8BallComponent.jsx'
import OddOrEvenComponent from './components/OddOrEvenComponent.jsx'
import RestaurantPickerComponent from './components/RestaurantPickerComponent.jsx'
import RevAlphaComponent from './components/RevAlphaComponent.jsx'
import RevNumComponent from './components/RevNumComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/hello' element={<SayHelloComponent />}/>
      <Route path='/addNum' element={<AddTwoNumComponent />} />
      <Route path='/askQuestion' element={<AskingQuestionsComponent />} />
      <Route path='/greater' element={<GreaterThenComponent />} />
      <Route path='/madlib' element={<MadlibComponent />} />
      <Route path='/magic8' element={<Magic8BallComponent />} />
      <Route path='/oddEven' element={<OddOrEvenComponent />} />
      <Route path='/picker' element={<RestaurantPickerComponent />} />
      <Route path='/revAlpha' element={<RevAlphaComponent />} />
      <Route path='/revNum' element={<RevNumComponent />} />

    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
