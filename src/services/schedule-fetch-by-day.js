import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function scheduleFetchByDay({date}) {
    try {
        //Fazendo a requisição
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        //Converte para JSON.
        const data = await response.json()

        // Filtra os agendamento do dia selecioando.
        const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

        return dailySchedules
        
    } catch (error) {
        console.log(error)
        alert("Não foi poss´vel buscar os agendamentos do dia selecionado")
    }
    
}