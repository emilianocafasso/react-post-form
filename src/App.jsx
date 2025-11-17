import { useState } from 'react'
import './App.css'
import axios from 'axios';
const endpoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'
function App() {

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: 'false' //booleano - checkbox
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    let newValue

    if (type === 'checkbox') {
      newValue = checked // per i checkbox uso la proprietà checked
    } else {
      newValue = value // per gli altri input uso value
    }

    // aggiornamento dello stato
    setFormData({
      ...formData, // spread per copiare tutti i campi esistenti
      [name]: newValue //sovrascrivo solo il campo modificato
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault() // prevengo refresh

    axios.post(endpoint, formData)
      .then((resp) => {
        console.log(resp.data);

        // resetto i campi del form
        setFormData({
          author: '',
          title: '',
          body: '',
          public: false
        })
      })
      .catch((err) => {
        alert('Errore')
      })
  }

  return (
    <>
      <h1>Invia il tuo form all'Endpoint</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <h2>Autore</h2>
          <input type="text" name='author' value={formData.author} onChange={handleChange} />
        </div>

        <div>
          <h2>Titolo</h2>
          <input type="text" name='title' value={formData.title} onChange={handleChange} />
        </div>

        <div>
          <h2>Body</h2>
          <input type="text" name='body' value={formData.body} onChange={handleChange} />
        </div>

        <div>
          <h2>Pubblico</h2>
          <input type="checkbox" name='public' value={formData.public} onChange={handleChange} />
        </div>

        <button type='submit'>Invia</button>

      </form>
    </>
  )
}

export default App
