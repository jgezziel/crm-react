const Form = ({client}) => {
   
  return (
    <>
        <div className="my-5">
            <label className="text-gray-800 font-semibold" htmlFor="name">Name:</label>
            <input defaultValue={client?.name} id="name" name="name" type="text" placeholder="Name of client" className="bg-gray-50 block w-full border-2 rounded mt-2 p-2 text-lg outline-none hover:border-purple-500 focus:border-purple-600 focus:ring focus:ring-purple-600/50 transition"/>
        </div>
        <div className="my-5">
            <label className="text-gray-800 font-semibold" htmlFor="company">Company:</label>
            <input defaultValue={client?.company} id="company" name="company" type="text" placeholder="Name of company" className="bg-gray-50 block w-full border-2 rounded mt-2 p-2 text-lg outline-none hover:border-purple-500 focus:border-purple-600 focus:ring focus:ring-purple-600/50 transition"/>
        </div>
        <div className="my-5">
            <label className="text-gray-800 font-semibold" htmlFor="email">Email:</label>
            <input defaultValue={client?.email} id="email" name="email" type="email" placeholder="Email of client" className="bg-gray-50 block w-full border-2 rounded mt-2 p-2 text-lg outline-none hover:border-purple-500 focus:border-purple-600 focus:ring focus:ring-purple-600/50 transition"/>
        </div>
        <div className="my-5">
            <label className="text-gray-800 font-semibold" htmlFor="phone">Phone:</label>
            <input defaultValue={client?.phone} id="phone" name="phone" type="phone" maxLength={10} placeholder="Phone of client" className="bg-gray-50 block w-full border-2 rounded mt-2 p-2 text-lg outline-none hover:border-purple-500 focus:border-purple-600 focus:ring focus:ring-purple-600/50 transition"/>
        </div>
        <div className="my-5">
            <label className="text-gray-800 font-semibold" htmlFor="notes">Notes:</label>
            <textarea defaultValue={client?.notes} id="notes" name="notes" placeholder="Notes of client" rows="5" className="bg-gray-50 resize-none block w-full border-2 rounded mt-2 p-2 text-lg outline-none hover:border-purple-500 focus:border-purple-600 focus:ring focus:ring-purple-600/50 transition"></textarea>
        </div>
    </>
  )
}

export {Form}