import { useNavigate, Form, useActionData } from 'react-router-dom'

import {Form as FormClient} from '../components/Form'
import Error from '../components/Error'

export const action = async ({request})=>{
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  // Validate data
  const errors = []
  if(Object.values(data).includes('')){
    errors.push('All fields are required')
  }

  if(Object.keys(errors).length){
    return errors
  }

  console.log(errors)

  return {}
}

const NewClient = () => {

  const errors = useActionData()
  const navigate = useNavigate()

  return (
    <>
      <h1 className="text-3xl font-black text-purple-800">New Client</h1>
      <p className="text-[1.15rem] mt-3 mb-5">Add new client</p>

      <div className="text-right mb-5">
        <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold px-4 py-2 rounded" onClick={()=>navigate('/')}>Return to</button>
      </div>

      <div className="bg-white border rounded-md shadow-sm my-8">
        <div className="p-4 md:p-8">
         {errors?.length && errors.map((err,i)=><Error key={i}>{err}</Error>)} 
          <Form method="POST">
            <FormClient/>
            <div className="my-10">
              <input type="submit" value="Register new client" className="w-full text-xl bg-purple-500 text-white p-3 rounded hover:bg-purple-600 hover:ring-4 hover:ring-purple-600/25 transition cursor-pointer"></input>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default NewClient