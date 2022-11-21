import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {db} from './firebase'
import {collection, addDoc} from 'firebase/firestore'          
           
function AddCourse() {
    const [courseName, setCourseName] = useState('');
    const [courseImage, setCourseImage] = useState('');
    const [category, setCategory] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
 
    const [loader, setLoader] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(e);
        setLoader(true)
      
        await addDoc(collection(db, 'courses'), {
            courseName: courseName,
            courseImage: courseImage,
            category: category,
            courseDescription: courseDescription, 
        })
        .then(() => {
            alert('Course has been submitted')
            setLoader(false);
        })
        .catch((error) => {
            alert(error.message);
            setLoader(false);
         }); 

     setCourseName("");
     setCourseImage("");
     setCategory("");
     setCourseDescription("");       
    };
         return (
            <>
            <Form onSubmit={handleSubmit}>
            <fieldset>
            <h3>Create a Course</h3>
                <Form.Group>
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control
                     type="text"
                     value={courseName}
                     onChange={(e) => setCourseName(e.target.value)
                    }
                     />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Course Thumbnail</Form.Label>
                    <Form.Control
                     type="text"
                     value={courseImage}
                     onChange={(e) => setCourseImage(e.target.value)
                    }
                             />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Course Description</Form.Label>
                    <Form.Control 
                    type="text"
                    value={courseDescription}
                     onChange={(e) => setCourseDescription(e.target.value)
                    }
                            />
                </Form.Group>
                <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)
                           }
                            />
                </Form.Group>                            
                <Button type="submit">   
                        Submit
                </Button>      
                </fieldset>   
                </Form>   
             </>
        );
    }
   
   
   export default AddCourse;