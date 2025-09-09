import { useState } from 'react'
import Navbar from './components/Navbar'
import Project from './components/Project'
import './App.css'

function App() {


  return (
    <>
    <Navbar />
    <Profile />
    <div style={{display : 'flex' , gap : '20px'}}>
      <Project />
      <Project />
    </div>
    
    </>
  )
}

function Profile(){
  return (
    <>
    <h1>Hello World!</h1>
    <img src='/src/assets/himanshu.jpg' alt='profile' height={500} width={500}/>
    <h2>Name : Himanshu Kumar Singh</h2>
    <h2> Qualification : B.Tech in Computer Science</h2>
    <h2> Web Developer </h2>
    </>
  )
}

export default App
