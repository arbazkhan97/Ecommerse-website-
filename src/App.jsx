
import './App.css'
import {
  BrowserRouter as
   Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from './myComponents/Home'
import AboutUs from './myComponents/AboutUs'
import ContactUs from './myComponents/ContactUs'
import Blog from './myComponents/Blog'
import SignUp  from './myComponents/SignUp';
import Login from './myComponents/Login';




function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/"element={<Home />}/>
          <Route exact path='/AboutUs' element={<AboutUs/>} />
          <Route exact path="/ContactUs"element={<ContactUs />}/>
          <Route exact path='/Blog'  element={<Blog/>} />
          <Route exact path='/SignUp' element={<SignUp/>}  />
          <Route exact path='/Login' element={<Login/>}  />

          <Route exact path='*' element={<Navigate to ="/" />} />
          
          

        </Routes>
      </Router>
          
                        
                    
    </>
    
      
  )
}

export default App
