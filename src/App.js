import logo from './logo.svg';
import React, {createContext, useEffect, useState}  from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import {db} from './components/firebase';
import {query, collection, onSnapshot} from 'firebase/firestore'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Student from './components/Student'
import Dashboard from './components/Dashboard'
import Courses from './components/Courses'
import SingleCourse from './components/SingleCourse'
import SignInForm from './components/SignInForm'
import RegForm from './components/RegForm'
import Error from './components/Error'
import EditCourse from './components/EditCourse'

export const CourseContext = createContext();

function App() {
  //get courses
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'courses'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let courses = [];
        querySnapshot.forEach((doc) => {
            courses.push({ ...doc.data(), id: doc.id });               
        });
        setCourses(courses);
    });
  return () => unsubscribe();
}, []);

  return (
    <>
      <Header/>
      <CourseContext.Provider value={{courses:courses,
       setCourses:courses => setCourses(courses),
      }}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="login" element={<SignInForm />}/>
          <Route path="register" element={<RegForm />}/>
          <Route path="member" element={<Student />}/>
            <Route path="dashboard" element={<Dashboard />}/>
            <Route path="dashboard/:id/edit" element={<EditCourse />}/>
            <Route path="courses/:id" element={<SingleCourse />}/>
            <Route path="courses" element={<Courses />}>
                <Route path="business" element={<Courses />}/>
                <Route path="gaming" element={<Courses />}/>
                <Route path="film" element={<Courses />}/>
                <Route path="web3" element={<Courses />}/>
                <Route path="webmonetization" element={<Courses />}/>
            </Route>
          <Route path="*" element={<Error />}/>
       </Routes>
      </CourseContext.Provider>
      <Footer/>
    </>
  );
}

export default App;
