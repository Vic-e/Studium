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
    };
         return (
            <>
                <Form onSubmit={handleSubmit}>
                    <fieldset>
                    <h3>Add New Video</h3>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)
                           }
                             />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Video</Form.Label>
                            <Form.Control
                             type="file"
                             value={videoFile}
                            onChange={(e) => setVideoFile(e.target.value)
                           }
                             />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Thumbnail</Form.Label>
                            <Form.Control 
                            type="file"
                            value={thumbnailImage}
                            onChange={(e) => setThumbailImage(e.target.value)
                            }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Length of Video</Form.Label>
                            <Form.Control 
                            type="text"
                            value={videoLength}
                            onChange={(e) => setVideoLength(e.target.value)
                            }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                            type="text"
                            value={videoDescription}
                            onChange={(e) => setVideoDescription(e.target.value)
                            }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Transcript</Form.Label>
                            <Form.Control 
                            type="text"
                            value={transcript}
                            onChange={(e) => setTranscript(e.target.value)
                            }
                            />
                        </Form.Group>
                        <Form.Select aria-label="select a course">
                          <option>Choose a Course</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Button type="submit">   
                        Submit
                        </Button>      
                    </fieldset>   
                    </Form>   
             </>
        );
    }
   
   
   export default AddVideo;