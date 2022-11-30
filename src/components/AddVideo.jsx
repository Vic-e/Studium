import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {db} from './firebase'
import {collection, addDoc} from 'firebase/firestore'              
           
const AddVideo = () => {
    const [instructor, setInstructor] = useState('');
    const [thumbnailImage, setThumbailImage] = useState('');
    const [title, setTitle] = useState('');
    const [transcript, setTranscript] = useState('');
    const [videoDescription, setVideoDescription] = useState('');
    const [videoFile, setVideoFile] = useState('');
    const [videoLength, setVideoLength] = useState('');
    const [courseID, setCourseID] = useState('');
 
    const [loader, setLoader] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(e);
        setLoader(true)
      
        await addDoc(collection(db, 'videos'), {
            instructor: instructor,
            thumbnailImage: thumbnailImage,
            title: title,
            transcript: transcript, 
            videoDescription: videoDescription,
            videoFile: videoFile,
            videoLength: videoLength,
            courseID: courseID,
        })
        .then(() => {
            alert('Course has been submitted')
            setLoader(false);
        })
        .catch((error) => {
            alert(error.message);
            setLoader(false);
         }); 

     setInstructor("");
     setThumbailImage("");
     setTitle("");
     setTranscript(""); 
     setVideoDescription("");
     setVideoFile("");
     setVideoLength("");    
     setCourseID("");                
    };
         return (
            <>
                <Form onSubmit={handleSubmit}>
                    <fieldset>
                    <h4 className="mt-4">Add New Video</h4>
                        <Form.Group>
                            <Form.Label className="mt-3">Title</Form.Label>
                            <Form.Control 
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)
                           }
                             />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="mt-3">Video</Form.Label>
                            <Form.Control
                             type="text"
                             value={videoFile}
                            onChange={(e) => setVideoFile(e.target.value)
                           }
                             />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="mt-3">Thumbnail</Form.Label>
                            <Form.Control 
                            type="text"
                            value={thumbnailImage}
                            onChange={(e) => setThumbailImage(e.target.value)
                            }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="mt-3">Length of Video</Form.Label>
                            <Form.Control 
                            type="text"
                            value={videoLength}
                            onChange={(e) => setVideoLength(e.target.value)
                            }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="mt-3">Description</Form.Label>
                            <Form.Control 
                            as="textarea" rows={3} 
                            value={videoDescription}
                            onChange={(e) => setVideoDescription(e.target.value)
                            }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="mt-3">Transcript</Form.Label>
                            <Form.Control 
                            as="textarea" rows={3} 
                            value={transcript}
                            onChange={(e) => setTranscript(e.target.value)
                            }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="mt-3">Course</Form.Label>
                            <Form.Control 
                            type="textarea" 
                            value={courseID}
                            onChange={(e) => setCourseID(e.target.value)
                            }
                            />
                        </Form.Group>
                        {/* <Form.Select className="mt-3 mb-3" aria-label="select a course">
                          <option>Choose a Course</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select> */}
                        <Button variant="dark" style={{width:"20%", color:"#A68863"}} className="mt-4" type="submit">   
                            Submit
                         </Button>     
                    </fieldset>   
                    </Form>   
             </>
        );
    }
   
   
   export default AddVideo;