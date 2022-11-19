import React, {useState, useEffect, useContext} from 'react'
import {CourseContext} from '../App'
import {useLocation, useParams} from 'react-router-dom'
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
      console.log(error.message)
    )
  }


  return (
        <main>
                      <Form onSubmit={handleUpdate}>
                          <fieldset>
                          <h3>Edit Course</h3>
                              <Form.Group>
                                  <Form.Label>Course Name</Form.Label>
                                  <Form.Control
                                  controlId="courseName"
                                  type="text"
                                  value={courseName}
                                  onChange={(e) => setCourseName(e.target.value)}
                                  />
                              </Form.Group>
                              <Form.Group>
                                    <Form.Label>Course Thumbnail</Form.Label>
                                    <Form.Control
                                    controlId="courseImage"
                                    type="text"
                                    value={courseImage}
                                    onChange={(e) => setCourseImage(e.target.value)}
                                          />
                              </Form.Group>
                              <Form.Group>
                                    <Form.Label>Course Description</Form.Label>
                                    <Form.Control 
                                    controlId="courseDescription"
                                    as="textarea" 
                                    rows={4} 
                                    value={courseDescription}
                                    onChange={(e) => setCourseDescription(e.target.value)}
                                          />
                              </Form.Group>
                              <Form.Group>
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control
                                    type="text"
                                    controlId="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                          />
                              </Form.Group>                            
                              <Button type="submit">   
                                      Submit
                              </Button>      
                              </fieldset>   
                        </Form>  
         </main>
  )
}

export default EditCourse;

// const EditCourse = () => {

//   const{id} = useParams();

//   const [editedCourse, setEditedCourse] = useState();
//   const [courseName, setCourseName] = useState('');
//   const [courseImage, setCourseImage] = useState('');
//   const [category, setCategory] = useState('');
//   const [courseDescription, setCourseDescription] = useState('');
  
//   const getData = async () => {

//   const docRef = doc(db, 'courses', id)
//   try {
//     const docSnap = await getDoc(docRef);
//     console.log(docSnap.data());
//     if(docSnap.exists()) {
//       setEditedCourse(docSnap.data())
//       setCourseName(docSnap.data().courseName)
//       setCourseImage(docSnap.data().courseImage)
//       setCourseDescription(docSnap.data().courseDecsription)
//       setCategory(docSnap.data().category)
//     }else {
//       console.log("Document does not exist")
//     }
//   }catch(error) {
//       console.log(error)
//     }
//   }

//     useEffect (() =>{
//       getData()
//     },[]);

//   // const handleSubmit = async (e) => {
  

//   const updateCourse = async (id, e) => {
//     e.preventDefault(e);
   

//     const courseDoc = doc(db, 'courses', id);  
//     await updateDoc(courseDoc, {
//         courseName: courseName, 
//         courseImage: courseImage,
//         courseDescription: courseDescription,
//         category: category
//     });
//   }

//   return (
//     <main>
//                   <Form onSubmit={updateCourse}>
//                       <fieldset>
//                       <h3>Edit Course</h3>
//                           <Form.Group>
//                               <Form.Label>Course Name</Form.Label>
//                               <Form.Control
//                               type="text"
//                               value={courseName}
//                               onChange={(e) => setCourseName(e.target.value)}
//                               />
//                           </Form.Group>
//                           <Form.Group>
//                                 <Form.Label>Course Thumbnail</Form.Label>
//                                 <Form.Control
//                                 type="text"
//                               value={courseImage}
//                               onChange={(e) => setCourseImage(e.target.value)}
//                                       />
//                           </Form.Group>
//                           <Form.Group>
//                                 <Form.Label>Course Description</Form.Label>
//                                 <Form.Control 
//                                 type="text"
//                                 as="textarea" 
//                                 rows={4} 
//                                 value={courseDescription}
//                                 onChange={(e) => setCourseDescription(e.target.value)}
//                                       />
//                           </Form.Group>
//                           <Form.Group>
//                                 <Form.Label>Category</Form.Label>
//                                 <Form.Control type="text"
//                                 value={category}
//                                 onChange={(e) => setCategory(e.target.value)}
//                                       />
//                           </Form.Group>                            
//                           <Button onClick={updateCourse} type="submit">   
//                                   Submit
//                           </Button>      
//                           </fieldset>   
//                     </Form>  
//      </main>
//   );
// }

// export default EditCourse;