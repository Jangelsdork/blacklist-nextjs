import { getConnection } from "../../../../utils/planetscale";

export default async function handler(req, res) {

    console.log( req.body.promoterId)

 const conn = getConnection()

const results = await conn.execute(
    "Insert into PromoterCompany (promoterId, companyId) VALUES (:promoterId, :organisationId)", req.body

//   `Insert into PromoterCompany (promoterId,) VALUES ${req.body.promoterId})`, 
//   `Insert into PromoterCompany (companyId) VALUES ${req.body.organisationId})`
);

 const response = results.rows

  res.status(200).json({ response: "success" });
}