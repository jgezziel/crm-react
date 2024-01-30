import {useLoaderData} from 'react-router-dom'
import Client from '../components/Client'

export const loader =()=>{
  const clients = [
    {
    "id": 1,
    "name": "Leanne Graham",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031",
    "company":"Romaguera-Crona"
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "email": "Shanna@melissa.tv",
    "phone": "010-692-6593",
    "company": "Deckow-Crist"
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "email": "Nathan@yesenia.net",
    "phone": "1-463-123-4447",
    "company": "Romaguera-Jacobson"
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "email": "Julianne.OConner@kory.org",
    "phone": "493-170-9623",
    "website": "kale.biz",
    "company":  "Robel-Corkery"
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "email": "Lucio_Hettinger@annie.ca",
    "phone": "(254)954-1289",
    "company": "Keebler LLC",

  }
]
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
          <p className="text-center mt-10">No clients</p>
        )
      }
    </>
  )
}

export default Index