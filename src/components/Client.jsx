import {useNavigate, Form, redirect} from 'react-router-dom'
import {deleteClient} from '../data/clients'

export const action = async ({params}) => {
  await deleteClient(params.id)
  return redirect('/')
}

const Client = ({ client }) => {
  const navigate = useNavigate();

  const { id, name, email, phone, company } = client;

  return (
    <tr className="border-b">
      <td className="p-4">
        <p className="text-xl text-gray-600">{name}</p>
        <p className="text-sm text-gray-400">{company}</p>
      </td>
      <td className="p-4">
        <p className="text-gray-600"><span className="font-semibold">Email: </span>{email}</p>
        <p className="text-purple-400"><span className="text-gray-600 font-semibold">Phone: </span>{phone}</p>
      </td>
      <td className="p-4 flex gap-4">
        <button onClick={()=>navigate(`/clients/${id}/edit`)} className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
          Edit
        </button>
        <Form method="POST" action={`/clients/${id}/delete`} onSubmit={(e)=>{!confirm('Are you sure you want to eliminate the client?') && e.preventDefault()}}>
          <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Delete
          </button>
        </Form>
      </td>
    </tr>
  );
};

export default Client;
