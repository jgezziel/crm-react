export async function getClients() {
    const url ="http://localhost:3000/clients"

    const resp = await fetch(url)
    const clients = await resp.json()

    return clients
}

export async function getClient(id) {
    const url ="http://localhost:3000/clients"

    const resp = await fetch(`${url}/${id}`)
    const clients = await resp.json()

    return clients
}

export async function addClient(data) {
    try {
        const response = await fetch('http://localhost:3000/clients', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        await response.json()

    } catch (error) {
        console.error(error)
    }
}

export async function updateClient(id, data) {
    try {
        const response = await fetch(`http://localhost:3000/clients/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        await response.json()

    } catch (error) {
        console.error(error)
    }
}

export async function deleteClient(id) {
    try {
        const response = await fetch(`http://localhost:3000/clients/${id}`, {
            method: 'DELETE'
        })

        await response.json()

    } catch (error) {
        console.error(error)
    }
}
