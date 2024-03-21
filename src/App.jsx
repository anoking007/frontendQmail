import { useState } from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  

  return (
  <>
  <BrowserRouter>
  <Routes>
  <Route path="/signup" element={<SignUp></SignUp>}></Route>
  <Route path="/signin" element={<SignIn></SignIn>}></Route>
  <Route path='/maildashboard' element={<Dashboard></Dashboard>}></Route>
  <Route path='/sendmail' element={<SendMail></SendMail>}></Route>

  </Routes>
  
  </BrowserRouter>
  
  
  </>
   
  )
}

export default App
