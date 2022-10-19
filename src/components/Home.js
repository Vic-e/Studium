import React, { Component} from 'react'
import Video from './Video'
import Recommended from './Recommended'
import Featured from './Featured'
import CategoryCards from './CategoryCards'

function Home() {
  return (
    <main>
    <Video/>
    <Featured/>
    <Recommended/>
    <CategoryCards/>
    </main>
  );
}

export default Home;
