import React, {useState, useEffect, useContext} from 'react'
import {CourseContext} from '../App'
import { useParams } from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import {db} from './firebase'
import {updateDoc, doc, getDoc} from 'firebase/firestore'


const EditCourse = () => {
  

  const {id} = useParams()
 
  const [courseName, setCourseName] = useState('');
  const [courseImage, setCourseImage] = useState('');
  const [category, setCategory] = useState('');
  const [courseDescription, setCourseDescription] = useState('');

  const getData = async () => {
  const docRef = doc(db, 'courses', id)
  try {
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    if(docSnap.exists()) {
      setCourseName(docSnap.data().courseName)
      setCourseImage(docSnap.data().courseImage)
      setCourseDescription(docSnap.data().courseDescription)
      setCategory(docSnap.data().category)
    }else {
      console.log("Document does not exist")
    }
  }catch(error) {
      console.log(error)
    }
  }

    useEffect (() =>{
      getData()
    },[]);
  
  console.log('this', id, {courseName})

  function handleUpdate(e){
    e.preventDefault()

    const docRef = doc(db, 'courses', id)
    updateDoc(docRef,{
      courseName,
      courseImage,
      courseDescription,
      category
    }).then(response =>{
      alert("updated")
    }).catch(error =>
      console.log("you have and issue")
    )
  }


  return (
        <main className="mt-5">
                      <Form onSubmit={handleUpdate}>
                          <fieldset>
                          <h3>Edit Course</h3>
                              <Form.Group>
                                  <Form.Label className="mt-3">Course Name</Form.Label>
                                  <Form.Control
                                  controlId="courseName"
                                  type="text"
                                  value={courseName}
                                  onChange={(e) => setCourseName(e.target.value)}
                                  />
                              </Form.Group>
                              <Form.Group>
                                    <Form.Label className="mt-3">Course Thumbnail</Form.Label>
                                    <Form.Control
                                    controlId="courseImage"
                                    type="text"
                                    value={courseImage}
                                    onChange={(e) => setCourseImage(e.target.value)}
                                          />
                              </Form.Group>
                              <Form.Group>
                                    <Form.Label className="mt-3">Course Description</Form.Label>
                                    <Form.Control 
                                    controlId="courseDescription"
                                    as="textarea" 
                                    rows={4} 
                                    value={courseDescription}
                                    onChange={(e) => setCourseDescription(e.target.value)}
                                          />
                              </Form.Group>
                              <Form.Group>
                                    <Form.Label className="mt-3">Category</Form.Label>
                                    <Form.Control
                                    type="text"
                                    controlId="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                          />
                              </Form.Group>                            
                              <Button variant="dark" style={{width:"20%", color:"#A68863"}} className="mt-5" type="submit">   
                    Submit
                </Button>    
                              </fieldset>   
                        </Form>  
         </main>
  )
}

export default EditCourse;

