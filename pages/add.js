import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../promoter-blacklist/components/layout'
import { useRef, useState } from 'react'


export default function AddPromoter() {

    const inputRef = useRef(null)

    const [formInput, setFormInput] = useState({
        first:"",
        last:""
    })

    const [form, setForm] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        setForm(formInput)
        console.log(form)
    }

    const handleChangeFirst = (e) => {
        setFormInput({first:e.target.value})
    }
    const handleChangeLast = (e) => {
        setFormInput({last:e.target.value})
    }


    return (
    <Layout>
    <Head>
        <title>Promoter Blacklist - add</title>
    </Head>
    <h1>Add a promoter</h1>
    <div className='form-containter'>
        <form className='form-flow' onSubmit={handleSubmit}>
            <ul>
                <li><label htmlFor="firstName" >First name: </label><input name='first' onChange={handleChangeFirst} type="text" /></li>
                <li><label htmlFor="last-name">Last name: </label><input name='last' onChange={handleChangeLast} type="text" /></li>
                <li><label htmlFor="company-name">Company: </label><input name='company' type="text" /></li>
                <li><label htmlFor="email">Email: </label><input name='email' type="email" /></li>
                <li><label htmlFor="phone-number">Ph number: </label><input name='phone' type="number" /></li>
                <li><label htmlFor="country">Country: </label><input name='country' type="text" /></li>
                <li><label htmlFor="description">Description of incident: </label><textarea name='description' name="description" id="description" cols="30" rows="10"></textarea></li>
                <li><input className='button' type="submit" value="Send Request"/></li>
            </ul>

        </form>
        <div>   
            first={formInput.first}
            Last={formInput.last}
        </div>
    </div>
    <p>
        <Link href="/">Back to home</Link>
    </p>

    </Layout>
    )
  }