import { sql } from "@vercel/postgres"

export default async function WatchOrderPOST({ params }) {
  const { rows } = await sql`SELECT * from CARTS where user_id=${params.watch_order}`
  console.log(rows)

  return <div></div>
}
