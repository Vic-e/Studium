import logo from './logo.svg';
import React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Student from './components/Student'
import Dashboard from './components/Dashboard'
import SingleCourse from './components/SingleCourse'
import SignInForm from './components/SignInForm'
import RegForm from './components/RegForm'
import Error from './components/Error'


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="login" element={<SignInForm />}/>
        <Route path="register" element={<RegForm />}/>
        <Route path="member" element={<Student />}/>
        <Route path="dashboard" element={<Dashboard />}/>
        <Route path="course" element={<SingleCourse />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
