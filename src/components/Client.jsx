const Client = ({ client }) => {
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
        <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
          Edit
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Client;
