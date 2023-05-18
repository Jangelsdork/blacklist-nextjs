import { getConnection } from "../../../utils/planetscale"

export default async function handler(req, res) {

 const conn = getConnection()

 const results = await conn.execute(
   "Select * from Promoter"
 );

 const response = results.rows

  res.status(200).json({ response });
}