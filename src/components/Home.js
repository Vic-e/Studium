import React from 'react'
import Featured from './Featured'
import CategoryCards from './CategoryCards'
import {Image} from 'react-bootstrap';

const Home = () => {
  return (
    <main>
    <Image src="https://assets.weforum.org/article/image/0R7BdnZl_gyeWOKsudAVmI7gNR673V4BIxQM6gwT-FY.png"/> 
      <h1>Curated Courses Crafted for Creators</h1>
    <Featured/>
    <CategoryCards/>
    </main>
  );
}

export default Home;
