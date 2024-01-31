import {useRouteError} from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()

  return (
    <div className="text-center">
        <h2 className="text-4xl font-extrabold text-purple-800 mb-4">CRM - Clients</h2>
        <p className="text-xl font-semibold my-4">Ha ocurrido un error</p>
        <p className="bg-red-50 mb-4 border border-red-100 rounded text-red-500 text-pretty py-2">{error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage