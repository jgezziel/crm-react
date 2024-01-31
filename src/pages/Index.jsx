import {useLoaderData} from 'react-router-dom'
import {getClients} from '../data/clients'
import Client from '../components/Client'

export const loader =()=>{
  const clients = getClients()
  return clients
}

const Index = () => {
  const data = useLoaderData()

  return (
    <>
      <h1 className="text-3xl font-black text-purple-800">Clients</h1>
      <p className="text-[1.15rem] mt-3 mb-5">Manage your clients</p>

      {data.length ? (
          <table className="w-full bg-white shadow table-auto text-left">
            <thead className="bg-purple-800 text-white">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Contact</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map(client => (
                 <Client key={client.id} client={client}/>
                ))
              }
            </tbody>
          </table>
        ):(
          <h3 className="text-4xl font-bold text-center mt-10">No clients</h3>
        )
      }
    </>
  )
}

export default Index