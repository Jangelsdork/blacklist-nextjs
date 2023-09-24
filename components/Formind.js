import { useState } from "react"

export default function FormInd({handleSubmit, parent}){


return(
<form className="form-flow" onSubmit={handleSubmit}>
<h1>{parent} an individual</h1>
  <ul>
    <li>
      <label htmlFor="firstName"></label>
      <input name="first" type="text" placeholder="First name:" />
    </li>
    <li>
      <label htmlFor="last-name"></label>
      <input name="last" type="text" placeholder="Last name: " />
    </li>
    <li>
      <label htmlFor="email"></label>
      <input name="email" type="email" placeholder="Email: "/>
    </li>
    <li>
      <label htmlFor="phone-number"> </label>
      <input name="phone" type="number" placeholder="Ph number:" />
    </li>
    <li>
      <label htmlFor="country"> </label>
      <input name="country" type="text" placeholder="Country:" />
    </li>
    <li>
      <label htmlFor="description"> </label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        placeholder="Description of incident:"
      ></textarea>
    </li>

    <li>
      <input className="button" type="submit" value="Send Request" />
    </li>
  </ul>
</form>
)
}