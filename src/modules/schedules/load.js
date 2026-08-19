import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import {hoursLoad} from "../form/hours-load.js"
const selectDate = document.getElementById("date")

export async function schedulesDay(){
    //Obtem a data do input
    const date = selectDate.value

    //Buscar na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({date})
    console.log(dailySchedules)

    //Renderiza as horas disponíveis
    hoursLoad({date})
}