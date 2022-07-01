import React from 'react';
import './App.css';
import Container from './container/Container';

export default function App() {
  var movie1 = "The avengers 2012";
  var movie2 = "Avengers: Untitled the Stand (1999)";
  var movie3 = "Avengers EndGame (2019)";
  var movie4 = "Avengers Infinity War (2018)";
  var movie5 = "Avengers age of Ultron 2015";
  var movie6 = "Avengers Assemble (2012)";
  var movie7 = "The Avengers: Earth's Mightest Heroes";
  var movie8 = "The Avengers (1961)";
  return (
    <div>
      <Container 
      movie1 = {movie1}
      movie2 = {movie2}
      movie3 = {movie3}
      movie4 = {movie4}
      movie5 = {movie5}
      movie6 = {movie6}
      movie7 = {movie7}
      movie8 = {movie8}
      />
    </div>
  )
}
