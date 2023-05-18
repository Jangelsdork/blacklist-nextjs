import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout'
import { useRef, useState } from 'react'


export default function AddPromoter() {

    const inputRef = useRef(null)

    const [formInput, setFormInput] = useState({
        first:"",
        last:"",
        company:"",
        email:"",
        phone:"",
        country:"",
        description:""
    })

    const postPromoters = async (promoterData) => {
        console.log(promoterData)
        try {
            const res = await fetch("/api/promoter/post",
            {
                method: "POST",
                mode: "cors",
                body: JSON.stringify(promoterData),
                headers: {
                    "Content-Type": "application/json",
                  },
            })
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }

    const handleSubmit = async (e) => {
        // keep this 
        e.preventDefault()

        const data = {
            first: e.target.first.value,
            last: e.target.last.value,
            company: e.target.company.value,
            email: e.target.email.value,
            phone: e.target.phone.value, 
            country: e.target.country.value,
            description: e.target.description.value
        }
        console.log(data)
        setFormInput(data)
        await postPromoters(data)
    }

    const handleChange = (e) => {
        console.log("something changed")
    }


    return (
    <Layout>
    <Head>
        <title>Promoter Blacklist - add</title>
    </Head>
    <h1>Add a promoter</h1>
    <div className='form-containter'>
        <form className='form-flow' onChange={handleChange} onSubmit={handleSubmit}>
            <ul>
                <li><label htmlFor="firstName" >First name: </label><input name='first' type="text" /></li>
                <li><label htmlFor="last-name">Last name: </label><input name='last'  type="text" /></li>
                <li><label htmlFor="company-name">Company: </label><input name='company' type="text" /></li>
                <li><label htmlFor="email">Email: </label><input name='email' type="email" /></li>
                <li><label htmlFor="phone-number">Ph number: </label><input name='phone' type="number" /></li>
                <li><label htmlFor="country">Country: </label><input name='country' type="text" /></li>
                <li><label htmlFor="description">Description of incident: </label><textarea name='description' name="description" id="description" cols="30" rows="10"></textarea></li>
                <li><input className='button' type="submit" value="Send Request"/></li>
            </ul>

        </form>
        <div>   
            {formInput.first}
            {formInput.last}
            {formInput.company}
            {formInput.email}
            {formInput.phone}
            {formInput.country}
            {formInput.description}
        </div>
    </div>
    <p>
        <Link href="/">Back to home</Link>
    </p>

    </Layout>
    )
  }