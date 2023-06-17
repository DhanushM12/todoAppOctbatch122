import React, {useState} from 'react'
import '../App.css'
import TodoMain from './TodoMain';

function App() {
  let time = new Date().toLocaleTimeString()
  // const [stateName, setStateName] = useState(initialValue)
  const [currentTime, setCurrentTime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString()
    setCurrentTime(time)
  }
  setInterval(updateTime, 1000);
  return (
    <div className='App'>
    <h2>{currentTime}</h2>
    <TodoMain />
    </div>
  )
}

export default App
