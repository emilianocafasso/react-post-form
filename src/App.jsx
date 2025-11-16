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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
  }

  return (
    <>

    </>
  )
}

export default App
