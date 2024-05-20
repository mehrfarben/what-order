import { sql } from "@vercel/postgres"
import { useEffect, useState } from "react"

const Admin = () => {
  const [data, setData] = useState([])
  // ...

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { rows } = await sql`
        SELECT id, mediaorder, media
        FROM watch_order
      `
        setData(rows)
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  return <div></div>
}

export default Admin
