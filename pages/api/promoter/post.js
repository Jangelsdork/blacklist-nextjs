import { getConnection } from "../../../utils/planetscale"

export default async function handler(req, res) {

    // const body = JSON.parse(req.body)

    console.log(req.body)

 const conn = getConnection()

const results = await conn.execute(
  "Insert into Promoter (first, last, company, email, phone, country, description) VALUES (:first, :last, :company, :email, :phone, :country, :description)", req.body
);

//  const response = results.rows

  res.status(200).json({ response: "success" });
}