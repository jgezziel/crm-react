import { useNavigate } from 'react-router-dom'

import Form from '../components/Form'

const NewClient = () => {

  const navigate = useNavigate()

  return (
    <>
      <h1 className="text-3xl font-black text-purple-800">New Client</h1>
      <p className="text-[1.15rem] mt-3 mb-5">Add new client</p>

      <div className="text-right mb-5">
        <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold px-4 py-2 rounded" onClick={()=>navigate('/')}>Return to</button>
      </div>

      <div className="bg-white border rounded-md shadow-sm my-8">
        <div className='p-4 md:p-8'>
          <form>
            <Form />
            <div className="my-10">
              <input type='submit' value="Register new client" className="w-full text-xl bg-purple-500 text-white p-3 rounded hover:bg-purple-600 hover:ring-4 hover:ring-purple-600/25 transition cursor-pointer"></input>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default NewClient