import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import {db} from './firebase'
import {updateDoc, doc, getDoc} from 'firebase/firestore'


const EditVideo = () => {

  const {id} = useParams()
 
  const [instructor, setInstructor] = useState('');
  const [thumbnailImage, setThumbailImage] = useState('');
  const [title, setTitle] = useState('');
  const [transcript, setTranscript] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [videoFile, setVideoFile] = useState('');
  const [videoLength, setVideoLength] = useState('');
  const [courseID, setCourseID] = useState('');


  const getVids = async () => {
  const vidRef = doc(db, 'videos', id)
  try {
    const docSnap = await getDoc(vidRef);
    console.log(docSnap.data());
    if(docSnap.exists()) {
      setInstructor(docSnap.data().instructor)
      setThumbailImage(docSnap.data().thumbnailImage)
      setTitle(docSnap.data().title)
      setTranscript(docSnap.data().transcript)
      setVideoDescription(docSnap.data().videoDescription)
      setVideoFile(docSnap.data().videoFile)
      setVideoLength(docSnap.data().videoLength)
      setCourseID(docSnap.data().courseID)
    }else {
      console.log("Document does not exist")
    }
  }catch(error) {
      console.log(error)
    }
  }

    useEffect (() =>{
      getVids()
    },[]);
  

  function handleUpdate(e){
    e.preventDefault()

    const docRef = doc(db, 'videos', id)
    updateDoc(docRef,{
      instructor,
      thumbnailImage,
      title,
      transcript,
      videoDescription,
      videoFile,
      videoLength,
      courseID
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
                          <h3 className="mt-4">Edit Video</h3>
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
                              <Button variant="dark" style={{width:"20%", color:"#A68863"}} className="mt-5" type="submit">   
                    Submit
                </Button>    
                              </fieldset>   
                        </Form>  
         </main>
  )
}

export default EditVideo;
