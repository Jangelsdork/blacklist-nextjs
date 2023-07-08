import { getConnection } from "../../../utils/planetscale"

export default async function handler(req, res) {

    // const body = JSON.parse(req.body)

    console.log(req.body)

 const conn = getConnection()

const results = await conn.execute(
  "Insert into Company (company_name, company_email, company_street, company_street_num, company_postcode, company_city, company_state, company_country) VALUES (:company_name, :company_email, :company_street, :company_street_num, :company_postcode, :company_city, :company_state, :company_country)", req.body
);

//  const response = results.rows

  res.status(200).json({ response: "success" });
}