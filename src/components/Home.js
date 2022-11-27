import React from 'react'
import Featured from './Featured'
import CategoryCards from './CategoryCards'
import {Image, Button} from 'react-bootstrap';

const Home = () => {
  return (
    <>  
    <section style={{ backgroundImage: `url("https://assets.weforum.org/article/image/0R7BdnZl_gyeWOKsudAVmI7gNR673V4BIxQM6gwT-FY.png")`,  
    backgroundRepeat: 'no-repeat',
    minHeight: '400px',
    backgroundSize: 'cover',
    }}> 
    <main><h1>Curated Courses Crafted for Creators</h1>
    <Button>Join Now</Button>
    </main>
    </section>
     
    <main> 
    <Featured/>
    <CategoryCards/>
    </main>
    </>
  );
}

export default Home;
