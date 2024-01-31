import { useNavigate, Form, useLoaderData, useActionData, redirect } from 'react-router-dom'

import {Form as FormClient} from '../components/Form'
import Error from '../components/Error'

import {getClient, updateClient} from '../data/clients'

export const loader = async ({params}) => {
  const client = await getClient(params.id)

  if(Object.values(client).length===0) {
    throw new Response('', {
      status: 404,
      statusText: 'Client not found'
    })
  }

  return client
}

export const action = async ({request, params}) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const email =formData.get('email')

  // Validate data
  const errors = []
  if(Object.values(data).includes('')){
    errors.push('All fields are required')
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if(!regex.test(email)){
    errors.push('Email is invalid')
  }


  if(Object.keys(errors).length){
    return errors
  }

  //Update client
  await updateClient(params.id, data)
  return redirect('/')
}

const EditClient = () => {

  const navigate = useNavigate()
  const client = useLoaderData()
  const errors = useActionData()

  return (
    <>
      <h1 className="text-3xl font-black text-purple-800">Edit Client</h1>
      <p className="text-[1.15rem] mt-3 mb-5">Edit client information</p>

      <div className="text-right mb-5">
        <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold px-4 py-2 rounded" onClick={()=>navigate(-1)}>Return to</button>
      </div>

      <div className="bg-white border rounded-md shadow-sm my-8">
        <div className="p-4 md:p-8">
        {errors?.length && errors.map((err,i)=><Error key={i}>{err}</Error>)}
          <Form method="PUT" noValidate>
            <FormClient client={client}/>
            <div className="my-10">
              <input type="submit" value="Save Changes" className="w-full text-xl bg-purple-500 text-white p-3 rounded hover:bg-purple-600 hover:ring-4 hover:ring-purple-600/25 transition cursor-pointer"></input>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default EditClient