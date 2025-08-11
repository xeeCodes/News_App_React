import Navbar from './components/navbar/Navbar.jsx'
import NewsItems from './components/newsItems/NewsItems.jsx'
import NewsBoard from './components/newsBoard/NewsBoard.jsx'
import './App.css'
import './index.css'
import { useState } from 'react'

function App() {
  const [category, setCategory] = useState("General");
  

  return (
    <>
      <Navbar category={category} setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </>
  )
}

export default App
