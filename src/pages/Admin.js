import { sql } from "@vercel/postgres"
import { useEffect, useState } from "react"

const Admin = () => {
  const [data, setData] = useState([])
  const connectionString = "postgres://default:4atdeI9FWLwp@ep-lucky-sky-a23xax34.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { rows } = await sql`
          SELECT *
          FROM watch_order
        `({ connectionString })
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
