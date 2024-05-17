// AdminForm.js
import React, { useState } from "react"

const Admin = () => {
  const [formData, setFormData] = useState({ id: "", order: "", media: "" })

  const handleSubmit = async (event) => {
    event.preventDefault()

    // src/pages/Admin.js
    const handleSubmit = async (event) => {
      event.preventDefault()

      try {
        const response = await fetch("/api/addMovie", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })

        if (!response.ok) {
          throw new Error("Failed to add data to watchorder.js")
        }

        const result = await response.json()
        alert(result.success ? "Data added successfully" : "Failed to add data")
      } catch (error) {
        console.error("Error:", error.message)
        alert("An error occurred while adding data to watchorder.js")
      }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className='homeApp'>
      <div>
        <h1>Add Data to watchorder</h1>
        <form onSubmit={handleSubmit}>
          <label>
            ID:
            <input type='text' name='id' value={formData.id} onChange={handleChange} />
          </label>
          <br />
          <label>
            Order (comma separated):
            <input type='text' name='order' value={formData.order} onChange={handleChange} />
          </label>
          <br />
          <label>
            Media (comma separated):
            <input type='text' name='media' value={formData.media} onChange={handleChange} />
          </label>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Admin
