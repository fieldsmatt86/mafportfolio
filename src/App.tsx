import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div>
      <div className = "Heading"> 
        <div className = "Name"> Matt Fields </div>
        <div className = "Info">
            <div> About </div>
            <div> Archive </div>
        </div>
        <div className = "Mode"> Mode </div>
        <div className = "Fun"> basketball camera water</div>
      </div>
      <div className = "Body">
        <div> Pictures describing me</div>
      </div>
      <div className = "BodyDescription">
        <div> Front End Developer QA Engineer</div>
      </div>
      <div className = "Projects">
        <div className = "Box1"> Project 1 </div>
        <div className = "Box1"> Project 2 </div>
        <div className = "Box1"> Project 3 </div>

      </div>
      <div className = "Bottom">
        <div className = "BottomLeft"> 
          <div> Email </div>
         
        </div>
        <div className = "BottomRight"> 
          <div> GitHub logo </div>
          <div> LinkedIn logo </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
