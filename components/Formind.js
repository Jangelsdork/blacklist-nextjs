export default function FormInd({handleSubmit}){
return(
<form className="form-flow" onSubmit={handleSubmit}>
<h1>Add an individual</h1>
  <ul>
    <li>
      <label htmlFor="firstName">First name: </label>
      <input name="first" type="text" />
    </li>
    <li>
      <label htmlFor="last-name">Last name: </label>
      <input name="last" type="text" />
    </li>
    <li>
      <label htmlFor="email">Email: </label>
      <input name="email" type="email" />
    </li>
    <li>
      <label htmlFor="phone-number">Ph number: </label>
      <input name="phone" type="number" />
    </li>
    <li>
      <label htmlFor="country">Country: </label>
      <input name="country" type="text" />
    </li>
    <li>
      <label htmlFor="description">Description of incident: </label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
      ></textarea>
    </li>
    <li>
      <button>Link individual to a company</button>
    </li>
    <li>
      <input className="button" type="submit" value="Send Request" />
    </li>
  </ul>
</form>
)
}