import React, {useState, useEffect} from 'react'
import {Accordion} from 'react-bootstrap'
import {db} from './firebase';
import {query, doc, collection, onSnapshot, deleteDoc} from 'firebase/firestore'
import {Link} from 'react-router-dom'


const VidDashboard = () => {
    const [videos, setVideos] = useState([]);

useEffect(() => {
  const qt = query(collection(db, 'videos'));
  const unsubscribe = onSnapshot(qt, (querySnapshot) => {
      let videos = [];
      querySnapshot.forEach((doc) => {
          videos.push({ ...doc.data(), id: doc.id });               
      });
      setVideos(videos);
  });
return () => unsubscribe();
}, []);

  //delete a course
  const deleteVideo = async(id) => {
    await deleteDoc(doc(db, 'video', id))
  }

  return (
    <>
              <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header><h4>Update Video</h4></Accordion.Header>
                <Accordion.Body style={{backgroundColor: '#0F0C0E', color: '#ffffff'}}>
                <ul>
                  {videos.map((video) =>(
                      <li>{video.title} {"  "} 
                      <Link to={`video/${video.id}/edit`}>Edit</Link> |
                      <Link onClick={() => deleteVideo(video.id)}> Delete</Link> 
                      </li>
                  ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
         
        </>
     );
 }


export default VidDashboard;