export default function FormOrg({handleOrgSubmit}){
    return (
        <form className='form-flow' onSubmit={handleOrgSubmit}>
            <h1>Add an organisation</h1>
                <ul>
                    <li><label htmlFor="company_name" >Company name: </label><input name='company_name' type="text" /></li>
                    <li><label htmlFor="company_email">Email: </label><input name='company_email' type="email" /></li>
                    <li><label htmlFor="company_street">Street name: </label><input name='company_street' type="text" /></li>
                    <li><label htmlFor="company_street_num">Street number </label><input name='company_street_num' type="text" /></li>
                    <li><label htmlFor="company_postcode">Postcode: </label><input name='company_postcode' type="text" /></li>
                    <li><label htmlFor="company_city">City: </label><input name='company_city' type="text" /></li>
                    <li><label htmlFor="company_state">State/Provence: </label><input name='company_state' type="text" /></li>
                    <li><label htmlFor="company_country">Country: </label><input name='company_country' type="text" /></li>
                    <li><button>Link company to an individual</button></li>
                    <li><input className='button' type="submit" value="Send Request"/></li>
                </ul>
    
            </form>
    )
}