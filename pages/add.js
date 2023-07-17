//just adding this comment so I can redeploy on vercel
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout'
import { useRef, useState } from 'react'
import { useAuth } from '@clerk/nextjs';
import moment from 'moment';
import FormInd from '../components/Formind';
import FormOrg from '../components/formorg';
import { nanoid } from 'nanoid';



export default function AddPromoter() {

    const inputRef = useRef(null)

    //gets clerk auth user id 
    const { userId } = useAuth()

    // only used to render message that everything has been submitted 
    const [submitSuccess, setSubmitSuccess] = useState()

    // the individual form data is saved in state here, which is then passed to the api call method (via handle submit) 
    const [formInput, setFormInput] = useState({
        first:"",
        last:"",
        company:"",
        email:"",
        phone:"",
        country:"",
        description:"",
        user:"",
        submissionDate:""
    })
   
    // the Organisation form data is saved in state here, which is then passed to the api call method (via handle submit) 
    const [orgFormInput, setOrgFormInput] = useState({
        company_name:"",
        company_email:"",
        company_street:"",
        company_street_num:"",
        company_postcode:"",
        company_city:"",
        company_state:"",
        company_country:"", 
    })

    const [formType, setFormType] = useState(false)

    //api post call for "individuals" form 
    const postPromoters = async (promoterData) => {
        try {
            const res = await fetch("/api/promoter/postind",
            {
                method: "POST",
                mode: "cors",
                body: JSON.stringify(promoterData),
                headers: {
                    "Content-Type": "application/json",
                  },
            })
            
            const data = await res.json();

            // after successful response, sets state so "success" message renders for the user, and resets the form 
            if(data.response === "success"){
                setSubmitSuccess(true)
            }
        } catch (error) {
            console.log(error)
        }

    }
    //api post call for "organisation" form 
    const postOrg = async (orgData) => {
        try {
            const res = await fetch("/api/promoter/postorg",
            {
                method: "POST",
                mode: "cors",
                body: JSON.stringify(orgData),
                headers: {
                    "Content-Type": "application/json",
                  },
            })
            
            const data = await res.json();

            // after successful response, sets state so "success" message renders for the user, and resets the form 
            if(data.response === "success"){
                setSubmitSuccess(true)
            }
        } catch (error) {
            console.log(error)
        }

    }

    //submission handler for individual form entry 
    const handleSubmit = async (e) => {
        // keep this - stops page from refreshing when submit button is clicked 
        e.preventDefault()
        const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a')

        const data = {
            first: e.target.first.value,
            last: e.target.last.value,
            email: e.target.email.value,
            phone: e.target.phone.value, 
            country: e.target.country.value,
            description: e.target.description.value,
            user: userId, 
            submissionDate: currentTime
        }
        console.log(data)
        setFormInput(data)
        await postPromoters(data)
        e.target.reset()
    }

    //submission handler for organisation 

    const handleOrgSubmit = async (e) => {
        e.preventDefault()
            console.log("submitted")
        const data = {
            company_name: e.target.company_name.value,
            company_email: e.target.company_email.value,
            company_street: e.target.company_street.value,
            company_street_num: e.target.company_street_num.value,
            company_postcode: e.target.company_postcode.value,
            company_city: e.target.company_city.value,
            company_state: e.target.company_state.value,
            company_country: e.target.company_country.value
        }
        console.log(data)
        setOrgFormInput(data)
        await postOrg(data)
        e.target.reset()
    }

    // Sets state of checkbox, which renders correct form 
    const handleChange = (e) => {
        setFormType(e.target.checked)
        console.log(formType)
        setSubmitSuccess(false)
    }

    function FormRender(){
        if(formType === false){
            return <FormInd handleSubmit={handleSubmit} parent={"Add"}/>

        }
        return <FormOrg handleOrgSubmit={handleOrgSubmit}/>
    }


    //renders confirmation upon successful submission 
    function UploadSuccessful(){
        if(submitSuccess === true){
            return <div>Thanks, your submission has been added to the database.</div>
        }
    }

    return (
      <Layout>
        <Head>
          <title>Promoter Blacklist - add</title>
        </Head>
        <div className="form-container">
            <div className="selector">
                <div>Add an individual</div>
                <label class="switch">
                <input type="checkbox" onChange={handleChange}/>
                <span class="slider round"></span>
                </label>
                <div>Add an organisation</div>
            </div>
            <FormRender />
          <div></div>
          <UploadSuccessful />
        </div>
        <p></p>
      </Layout>
    );
  }