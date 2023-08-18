// import logo from './logo.svg';
import './App.css';

import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App =()=> {
  const pageSize=5;
  const  Apikey= process.env.REACT_APP_NEWS_API;
  const[progress,setProgress]=useState(0)
 

  
    return (
  <Router>
      <div>

      <Navbar/>
      
      <LoadingBar
        height={5}
        color='#f11946'
        progress={progress}

        
      />
      <Routes>
        
      <Route exact path="/" element={<News setProgress={setProgress} Apikey={Apikey} pagesize={pageSize} country="in" key="general" category="general"/>}/>
      <Route exact path="/business" element={<News setProgress={setProgress} Apikey={Apikey} pagesize={pageSize} country="in"key="business"   category="business"/>}/>
      <Route exact path="/entertainment" element={<News setProgress={setProgress} Apikey={Apikey} pagesize={pageSize} country="in" key="entertainment" category="entertainment"/>}/>
      <Route exact path="/general" element={<News setProgress={setProgress} Apikey={Apikey} pagesize={pageSize} country="in" key="general" category="general"/>}/>
      <Route exact path="/health" element={<News setProgress={setProgress} Apikey={Apikey} pagesize={pageSize} country="in" key="health" category="health"/>}/>
      <Route exact path="/sports" element={<News setProgress={setProgress} Apikey={Apikey} pagesize={pageSize} country="in" key="sports" category="sports"/>}/>
      <Route exact path="/science" element={<News setProgress={setProgress} Apikey={Apikey} pagesize={pageSize} country="in" key="science" category="science"/>}/>
      <Route exact path="/technology" element={<News setProgress={setProgress} Apikey={Apikey} pagesize={pageSize} country="in" key="technology" category="technology"/>}/>
      
  
     
      
    </Routes>
        
      </div>
    </Router>
    )
  
}

export default App;