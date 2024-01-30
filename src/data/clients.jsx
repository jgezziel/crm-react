export async function getClients() {
    const url ="http://localhost:3000/clients"

    const resp = await fetch(url)
    const clients = await resp.json()

    return clients
}