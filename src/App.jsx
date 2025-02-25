import './App.css'; 
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"; 
import Connection from './Componentes/Connection'; 
import Navbar from './Componentes/Navbar';

function App(){ 
  return ( 
  <div className="App"> 
  
      <Router> 
        <Navbar/> 
        <Routes>
        <Route />
          {Connection.map((route,index)=>( <Route key={index} 
          path={route.path} element={route.element} /> ))} 
        </Routes> 
      </Router> 

  </div>

); } export default App