import React from 'react';
import './Grid.css';
import Icons from './Icons';
import Header from './Header';
import Footer from './Footer';




const Grid = () => {
  return (
    <div className={'container'}>
        <Icons />
        <Header />
        <Footer />
    </div>
  )
}

export default Grid