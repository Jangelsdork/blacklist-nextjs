import { getConnection } from "../../../../utils/planetscale"

export default async function handler(req, res) {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;

  const { id } = req.query;
  const conn = getConnection();
// add :update promoter set dateResolved = currentDate where id = '${id}'
  const results = await conn.execute(`update Promoter set status = 0 where id = '${id}' union `);
  
  const response = results

  res.status(200).json({ response });

}