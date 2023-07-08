import { getConnection } from "../../../../utils/planetscale";

export default async function handler(req, res) {
  const { searchorg } = req.query;
  const conn = getConnection();

  const results = await conn.execute(
    `select company_name, company_country, id 
    from Company 
    where company_name like '%${searchorg}%'
    or company_email like '%${searchorg}%'
    `);
    
  const response = results;

  res.status(200).json({ response });

}

