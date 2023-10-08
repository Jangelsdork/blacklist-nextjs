import { getConnection } from "../../../../utils/planetscale";

export default async function handler(req, res) {
  const { id } = req.query;
  const conn = getConnection();

  const results = await conn.execute(
    `select company_name, id 
    from Company 
    where company_name like '%${id}%'
    limit 5;
    `);
    
  const response = results;

  res.status(200).json({ response });

}

