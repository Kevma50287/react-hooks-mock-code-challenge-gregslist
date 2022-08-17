import React, { useState } from 'react'
import { url } from './App'

export default function Form({ addItem }) {
    const [formData, setFormData] = useState({
        description: "",
        image: "",
        location: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(d => addItem(d))
            .catch(err => console.log(err))
    }

    const handleFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='description'>Enter Description:</label>
                <input id='description' name='description' value={formData.description} onChange={handleFormData}></input>
            </div>
            <div >
                <label htmlFor='image'>Enter Image:</label>
                <input id='image' name='image' value={formData.image} onChange={handleFormData}></input>
            </div>
            <div>
                <label htmlFor='location'>Enter Location:</label>
                <input id='location' name='location' value={formData.location} onChange={handleFormData}></input>
            </div>
            <div>
                <button type='submit'>Submit New Item</button>
            </div>
        </form>
    )
}
