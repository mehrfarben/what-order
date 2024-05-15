// api/addMovie.js
const fs = require("fs")
const path = require("path")

export default async function addMovie(req, res) {
  try {
    // Read the existing data from WatchOrder.js
    let existingData = require("../data/WatchOrder.js")

    // Extract movie data from request body
    const { id, order } = req.body

    // Append the new movie data to the existing movies array
    existingData.movies.push({ id, order })

    // Write the updated data back to WatchOrder.js
    fs.writeFileSync(path.resolve(__dirname, "../data/WatchOrder.js"), `export const WatchOrder = ${JSON.stringify(existingData, null, 2)};\n`)

    res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, error: "Internal Server Error" })
  }
}
