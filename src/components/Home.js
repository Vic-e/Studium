import React from 'react'
import Featured from './Featured'
import CategoryCards from './CategoryCards'
import {Link} from 'react-router-dom'
import {Image, Button} from 'react-bootstrap';

const Home = () => {
  return (
    <>  
    <section className="mt-5" 
    style={{ backgroundImage: `url("https://res.cloudinary.com/black-web-fest/image/upload/v1669656709/Studium/studium-student-learning-online_kehpud.jpg")`,  
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '900px'
    }}> 
    <div className="heroBox">
      <p style={{ color: "#000000", fontSize: "50px", lineHeight: "20px"}}>Curated Courses</p>
      <p style={{ color: "#000000", fontSize: "50px"}}> Crafted for Creators</p>
      <Link to="login"><Button size="lg">Sign-up</Button></Link>
    </div>
    </section>
     
    <main> 
    <Featured/>
    <CategoryCards/>
    </main>
    </>
  );
}

export default Home;
