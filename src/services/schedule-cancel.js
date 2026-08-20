import {apiConfig} from "./api-config.js"

export async function scheduleCancel({id}) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
            method: "DELETE",
        }
        )
        if(!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`)
        }
        alert("Agendamento cancelado com sucesso")
    } catch (error) {
        alert("Não foi possível cancelar o agendamento")
        console.log(error)
    }
}