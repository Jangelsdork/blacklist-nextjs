// const superagent = require('superagent')
import { useRouter } from 'next/router'
import { getConnection } from "../../../utils/planetscale"

export default async function handler(req, res) {

// uses useRouter to get the url that client has entered 

    const number = Number(req.query.number);



// planetscale query to database
  const conn = getConnection()

  const results = await conn.execute(
    `select * from Promoter where id = ${number}`
  );
 
  const response = results
 
   res.status(200).json({ response });
  }