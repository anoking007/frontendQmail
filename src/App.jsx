import { useState } from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  

  return (
  <>
  <BrowserRouter>
  <Routes>
  <Route path="/signup" element={<SignUp></SignUp>}></Route>
  <Route path="/signin" element={<SignIn></SignIn>}></Route>
  <Route path='/mailDashboard' element={<Dashboard></Dashboard>}></Route>

  </Routes>
  
  </BrowserRouter>
  
  
  </>
   
  )
}

export default App
