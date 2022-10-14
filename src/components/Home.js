import React, { Component} from 'react'
import Video from './Video'
import Recommended from './Recommended'


function Home() {
  return (
    <main>
    <Video/>
    <h2>Categories</h2>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img width="200" src="https://d2u3kfwd92fzu7.cloudfront.net/asset/cms/Art_Basel_Hong_Kong_2022_Lead_Image_2-2-1.jpg"/>
      <h3>Topic</h3>
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img width="200" src="https://d2u3kfwd92fzu7.cloudfront.net/asset/cms/Art_Basel_Hong_Kong_2022_Lead_Image_2-2-1.jpg"/>
      <h3>Topic</h3>
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img width="200" src="https://d2u3kfwd92fzu7.cloudfront.net/asset/cms/Art_Basel_Hong_Kong_2022_Lead_Image_2-2-1.jpg"/>
      <h3>Topic</h3>
    </div>
    </main>
  );
}

export default Home;
