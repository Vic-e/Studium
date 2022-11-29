import logo from './logo.svg';
import React, {createContext, useEffect, useState}  from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import { db } from './components/firebase';
import {query, collection, onSnapshot} from 'firebase/firestore'
import { AuthContextProvider } from './context/AuthContext'
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
import EditVideo from './components/EditVideo'
import ProtectedRoute from './components/ProtectedRoute'


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
      <AuthContextProvider>
        <Header/>
        <CourseContext.Provider value={{courses:courses,
        setCourses:courses => setCourses(courses),
        }}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="login" element={<SignInForm />}/>
            <Route path="register" element={<RegForm />}/>
              <Route path="member" element={<ProtectedRoute><Student /></ProtectedRoute>}/>
              <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
                <Route path="dashboard/course/:id/edit" element={<ProtectedRoute><EditCourse /></ProtectedRoute>}/>
                <Route path="dashboard/video/:id/edit" element={<ProtectedRoute><EditVideo /></ProtectedRoute>}/>
                <Route path="courses/:id" element={<ProtectedRoute><SingleCourse /></ProtectedRoute>}/>
                <Route path="courses" element={<ProtectedRoute><Courses /></ProtectedRoute>}>
                    <Route path="business" element={<ProtectedRoute><Courses /></ProtectedRoute>}/>
                    <Route path="gaming" element={<ProtectedRoute><Courses /></ProtectedRoute>}/>
                    <Route path="film" element={<ProtectedRoute><Courses /></ProtectedRoute>}/>
                    <Route path="web3" element={<ProtectedRoute><Courses /></ProtectedRoute>}/>
                    <Route path="webmonetization" element={<ProtectedRoute><Courses /></ProtectedRoute>}/>
                </Route>
            <Route path="*" element={<Error />}/>
        </Routes>
        </CourseContext.Provider>
      </AuthContextProvider>
      <Footer/>
    </>
  );
}

export default App;
