export default function FormOrg({handleOrgSubmit}){
    return (
      <form className="form-flow" onSubmit={handleOrgSubmit}>
        <h1>Add an organisation</h1>
        <ul>
          <li>
            <label htmlFor="company_name"> </label>
            <input name="company_name" type="text" placeholder="Company name:" />
          </li>
          <li>
            <label htmlFor="company_email"> </label>
            <input name="company_email" type="email" placeholder="Email:" />
          </li>
          <li>
            <label htmlFor="company_street"> </label>
            <input name="company_street" type="text" placeholder="Street name:" />
          </li>
          <li>
            <label htmlFor="company_street_num"> </label>
            <input name="company_street_num" type="text" placeholder="Street number" />
          </li>
          <li>
            <label htmlFor="company_postcode"> </label>
            <input name="company_postcode" type="text" placeholder="Postcode:" />
          </li>
          <li>
            <label htmlFor="company_city"> </label>
            <input name="company_city" type="text" placeholder="City:"/>
          </li>
          <li>
            <label htmlFor="company_state"> </label>
            <input name="company_state" type="text" placeholder="State/Provence:" />
          </li>
          <li>
            <label htmlFor="company_country"> </label>
            <input name="company_country" type="text" placeholder="Country:" />
          </li>
          <li>
            <input className="button" type="submit" value="Send Request" />
          </li>
        </ul>
      </form>
    );
}