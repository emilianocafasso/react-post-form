import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: 'false' //booleano - checkbox
  })


  return (
    <>

    </>
  )
}

export default App
