import React from 'react';
import pic1 from './pic1.webp';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.webp';
import pic6 from './pic6.jpg';
import pic7 from './pic7.jpg';
import pic8 from './pic8.jpg';
import './Container.css';

export default function Container({movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8}) {
  return (
    <div className='Container'>
        <div className="One">
            <div className="movie">
                <img src={pic1} alt="" />
                {movie1}
            </div>
            <div className="movie">
                <img src={pic2} alt="" />
                {movie2}
            </div>
            <div className="movie">
                <img src={pic3} alt="" />
                {movie3}
            </div>
            <div className="movie">
                <img src={pic4} alt="" />
                {movie4}
            </div>
        </div>
        <div className="Two">
        <div className="movie">
                <img src={pic5} alt="" />
                {movie5}
            </div>
            <div className="movie">
                <img src={pic6} alt="" />
                {movie6}
            </div>
            <div className="movie">
                <img src={pic7} alt="" />
                {movie7}
            </div>
            <div className="movie">
                <img src={pic8} alt="" />
                {movie8}
            </div>
        </div>
    </div>
  )
}
