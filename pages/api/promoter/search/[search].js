import { getConnection } from "../../../../utils/planetscale";

export default async function handler(req, res) {
  const { search } = req.query;
  const conn = getConnection();

  const results = await conn.execute(
    `select first, last, id, user 
    from Promoter 
    where first like '%${search}%'
    or last like '%${search}%'
    or country like '%${search}%'
    or email like '%${search}%'
    or country like '%${search}%'
    or company like '%${search}%'
    `);
    
  const response = results;

  res.status(200).json({ response });

}

